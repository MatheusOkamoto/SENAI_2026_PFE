
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "../../db/banco";

import {
    criarSessao,
    NOME_COOKIE_SESSAO,
    DURACAO_SESSAO_MS
} from "../../lib/auth";

export const runtime = "nodejs";

// Realizar o login do usuário
export async function POST(request) {
    try {
        // Receber os dados enviados pelo formulário
        const dados = await request.json();

        const login = typeof dados.usuario === "string"
            ? dados.usuario.trim()
            : "";

        const senha = typeof dados.senha === "string"
            ? dados.senha
            : "";

        // Verificar se os campos foram preenchidos
        if (!login || !senha) {
            return NextResponse.json(
                { erro: "Informe o usuário e a senha." },
                { status: 400 }
            );
        }

        // Buscar o usuário no banco de dados
        const usuario = db.prepare(`
            SELECT id_usuario, nome, login, senha
            FROM usuario
            WHERE login = ?
        `).get(login);

        // Verificar se o usuário existe
        if (!usuario) {
            return NextResponse.json(
                { erro: "Usuário ou senha inválidos." },
                { status: 401 }
            );
        }

        // Comparar a senha informada com o hash salvo
        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );

        // Verificar se a senha está correta
        if (!senhaValida) {
            return NextResponse.json(
                { erro: "Usuário ou senha inválidos." },
                { status: 401 }
            );
        }

        // Criar uma sessão para o usuário autenticado
        const token = criarSessao(usuario.id_usuario);

        // Preparar a resposta de sucesso
        const resposta = NextResponse.json(
            {
                mensagem: "Login realizado com sucesso!",
                usuario: {
                    id: usuario.id_usuario,
                    nome: usuario.nome,
                    login: usuario.login
                }
            },
            { status: 200 }
        );

        // Salvar o token da sessão em um cookie
        resposta.cookies.set(
            NOME_COOKIE_SESSAO,
            token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: DURACAO_SESSAO_MS / 1000
            }
        );

        // Retornar a resposta de autenticação
        return resposta;

    } catch (error) {
        console.error("Erro ao realizar login:", error);

        return NextResponse.json(
            { erro: "Erro ao realizar login." },
            { status: 500 }
        );
    }
}
