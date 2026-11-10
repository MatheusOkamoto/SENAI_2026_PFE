
import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import db from "../db/banco";

// Nome do cookie utilizado na autenticação
export const NOME_COOKIE_SESSAO = "escola_sessao";

// Duração da sessão: 7 dias
export const DURACAO_SESSAO_MS = 7 * 24 * 60 * 60 * 1000;


// ============================================
// CRIAR SESSÃO
// ============================================

export function criarSessao(idUsuario) {

    // Gerar um token aleatório e seguro
    const token = randomBytes(32).toString("hex");

    // Definir a data de expiração
    const expiraEm = Date.now() + DURACAO_SESSAO_MS;

    // Remover sessões expiradas do banco
    db.prepare(`
        DELETE FROM sessoes
        WHERE expira_em <= ?
    `).run(Date.now());

    // Salvar a nova sessão no SQLite
    const sql = db.prepare(`
        INSERT INTO sessoes (
            token,
            id_usuario,
            expira_em
        )
        VALUES (?, ?, ?)
    `);

    sql.run(token, idUsuario, expiraEm);

    // Retornar o token criado
    return token;
}


// ============================================
// OBTER TOKEN DA SESSÃO
// ============================================

export function obterTokenSessao(request) {

    // Obter o cookie enviado pelo navegador
    const token = request.cookies.get(
        NOME_COOKIE_SESSAO
    )?.value;

    // Verificar se o token existe
    if (!token) {
        return null;
    }

    // Verificar o formato do token
    if (!/^[a-f0-9]{64}$/.test(token)) {
        return null;
    }

    return token;
}


// ============================================
// OBTER USUÁRIO AUTENTICADO
// ============================================

export function obterUsuarioSessao(request) {

    // Recuperar o token da sessão
    const token = obterTokenSessao(request);

    // Se não existir token, não há autenticação
    if (!token) {
        return null;
    }

    // Buscar uma sessão válida no banco
    const usuario = db.prepare(`
        SELECT
            usuario.id_usuario,
            usuario.nome,
            usuario.login

        FROM sessoes

        INNER JOIN usuario
            ON usuario.id_usuario = sessoes.id_usuario

        WHERE sessoes.token = ?
          AND sessoes.expira_em > ?
    `).get(token, Date.now());

    // Retornar o usuário ou null
    return usuario || null;
}


// ============================================
// EXIGIR AUTENTICAÇÃO
// ============================================

export function exigirAutenticacao(request) {

    // Verificar se existe um usuário autenticado
    const usuario = obterUsuarioSessao(request);

    // Se estiver autenticado, permitir continuar
    if (usuario) {
        return null;
    }

    // Caso contrário, bloquear a requisição
    return NextResponse.json(
        {
            erro: "Faça login para acessar este recurso."
        },
        {
            status: 401
        }
    );
}
