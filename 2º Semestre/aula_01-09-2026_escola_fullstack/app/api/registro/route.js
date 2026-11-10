
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "../../db/banco";

// Cadastrar um novo usuário
export async function POST(request) {
    try {
        // Receber os dados enviados pelo formulário
        const dados = await request.json();

        const nome = typeof dados.nome === "string"
            ? dados.nome.trim()
            : "";

        const usuario = typeof dados.usuario === "string"
            ? dados.usuario.trim()
            : "";

        const senha = typeof dados.senha === "string"
            ? dados.senha
            : "";

        // Verificar se todos os campos foram preenchidos
        if (!nome || !usuario || !senha) {
            return NextResponse.json(
                { erro: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        // Validar o nome
        if (nome.length < 2 || nome.length > 100) {
            return NextResponse.json(
                { erro: "O nome deve ter entre 2 e 100 caracteres." },
                { status: 400 }
            );
        }

        // Validar o nome de usuário
        if (!/^[a-zA-Z0-9._-]{3,32}$/.test(usuario)) {
            return NextResponse.json(
                {
                    erro: "O usuário deve ter entre 3 e 32 caracteres e conter apenas letras, números, pontos, hífens ou underscores."
                },
                { status: 400 }
            );
        }

        // Validar o tamanho da senha
        if (senha.length < 8 || senha.length > 128) {
            return NextResponse.json(
                { erro: "A senha deve ter entre 8 e 128 caracteres." },
                { status: 400 }
            );
        }

        // Verificar se o usuário já existe no banco
        const usuarioExistente = db.prepare(`
            SELECT id_usuario
            FROM usuario
            WHERE login = ?
        `).get(usuario);

        if (usuarioExistente) {
            return NextResponse.json(
                { erro: "Este usuário já está cadastrado." },
                { status: 409 }
            );
        }

        // Gerar o hash da senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // Inserir o novo usuário no banco de dados
        const sql = db.prepare(`
            INSERT INTO usuario (nome, login, senha)
            VALUES (?, ?, ?)
        `);

        sql.run(nome, usuario, senhaHash);

        // Retornar uma mensagem de sucesso
        return NextResponse.json(
            {
                mensagem: "Usuário cadastrado com sucesso!"
            },
            { status: 201 }
        );

    } catch (error) {
        // Tratar tentativa de cadastro duplicado
        if (
            error.code === "SQLITE_CONSTRAINT_UNIQUE" ||
            error.code === "SQLITE_CONSTRAINT_PRIMARYKEY"
        ) {
            return NextResponse.json(
                { erro: "Este usuário já está cadastrado." },
                { status: 409 }
            );
        }

        console.error("Erro ao cadastrar usuário:", error);

        return NextResponse.json(
            { erro: "Erro ao cadastrar usuário." },
            { status: 500 }
        );
    }
}
