
import db from "../../db/banco";
import { NextResponse } from "next/server";
import { exigirAutenticacao } from "../../lib/auth";

export const runtime = "nodejs";


// ============================================
// LISTAR DISCIPLINAS
// ============================================

export async function GET(request) {
    try {
        // Verificar autenticação
        const acessoNegado = exigirAutenticacao(request);

        if (acessoNegado) {
            return acessoNegado;
        }

        // Buscar disciplinas em ordem alfabética
        const disciplinas = db.prepare(`
            SELECT
                id_disciplina,
                nome,
                pontuacao_minima
            FROM disciplinas
            ORDER BY nome ASC
        `).all();

        // Retornar a lista de disciplinas
        return NextResponse.json(disciplinas);

    } catch (error) {
        console.error(
            "Erro ao listar disciplinas:",
            error
        );

        return NextResponse.json(
            { erro: "Erro ao buscar disciplinas." },
            { status: 500 }
        );
    }
}


// ============================================
// CADASTRAR DISCIPLINA
// ============================================

export async function POST(request) {
    try {
        // Verificar autenticação
        const acessoNegado = exigirAutenticacao(request);

        if (acessoNegado) {
            return acessoNegado;
        }

        // Receber os dados do formulário
        const dados = await request.json();

        const nome = typeof dados.nome === "string"
            ? dados.nome.trim()
            : "";

        const valor = dados.pontuacao_minima;

        // Verificar os campos obrigatórios
        if (
            !nome ||
            valor === "" ||
            valor === null ||
            valor === undefined
        ) {
            return NextResponse.json(
                { erro: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        // Validar o nome da disciplina
        if (nome.length < 2 || nome.length > 100) {
            return NextResponse.json(
                {
                    erro: "O nome deve ter entre 2 e 100 caracteres."
                },
                { status: 400 }
            );
        }

        // Converter a pontuação para número
        const pontuacao_minima = Number(valor);

        // Validar a pontuação mínima
        if (
            !Number.isFinite(pontuacao_minima) ||
            pontuacao_minima < 0 ||
            pontuacao_minima > 100
        ) {
            return NextResponse.json(
                {
                    erro: "A pontuação deve estar entre 0 e 100."
                },
                { status: 400 }
            );
        }

        // Verificar se a disciplina já existe
        const disciplinaExistente = db.prepare(`
            SELECT id_disciplina
            FROM disciplinas
            WHERE nome = ? COLLATE NOCASE
        `).get(nome);

        if (disciplinaExistente) {
            return NextResponse.json(
                {
                    erro: "Esta disciplina já está cadastrada."
                },
                { status: 409 }
            );
        }

        // Inserir a disciplina no banco de dados
        const sql = db.prepare(`
            INSERT INTO disciplinas (
                nome,
                pontuacao_minima
            )
            VALUES (?, ?)
        `);

        const resultado = sql.run(
            nome,
            pontuacao_minima
        );

        // Retornar mensagem de sucesso
        return NextResponse.json(
            {
                mensagem: "Disciplina cadastrada com sucesso!",
                id_disciplina: Number(
                    resultado.lastInsertRowid
                )
            },
            { status: 201 }
        );

    } catch (error) {

        // Tratar duplicidade no banco
        if (
            error.code === "SQLITE_CONSTRAINT_UNIQUE"
        ) {
            return NextResponse.json(
                {
                    erro: "Esta disciplina já está cadastrada."
                },
                { status: 409 }
            );
        }

        // Tratar JSON inválido
        if (error instanceof SyntaxError) {
            return NextResponse.json(
                { erro: "Dados enviados são inválidos." },
                { status: 400 }
            );
        }

        console.error(
            "Erro ao cadastrar disciplina:",
            error
        );

        return NextResponse.json(
            { erro: "Erro ao cadastrar disciplina." },
            { status: 500 }
        );
    }
}
