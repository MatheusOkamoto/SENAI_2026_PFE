
import { NextResponse } from "next/server";
import db from "../../../db/banco";

import {
    NOME_COOKIE_SESSAO,
    obterTokenSessao
} from "../../../lib/auth";

export const runtime = "nodejs";

// ============================================
// ENCERRAR SESSÃO DO USUÁRIO
// ============================================

export async function POST(request) {
    try {
        // Recuperar o token da sessão atual
        const token = obterTokenSessao(request);

        // Se existir uma sessão, removê-la do banco
        if (token) {
            const sql = db.prepare(`
                DELETE FROM sessoes
                WHERE token = ?
            `);

            sql.run(token);
        }

        // Preparar a resposta de sucesso
        const resposta = NextResponse.json(
            {
                mensagem: "Logout realizado com sucesso!"
            },
            {
                status: 200
            }
        );

        // Apagar o cookie de autenticação
        resposta.cookies.set(
            NOME_COOKIE_SESSAO,
            "",
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 0
            }
        );

        // Impedir o cache da resposta
        resposta.headers.set(
            "Cache-Control",
            "no-store"
        );

        return resposta;

    } catch (error) {
        console.error(
            "Erro ao realizar logout:",
            error
        );

        return NextResponse.json(
            {
                erro: "Erro ao encerrar a sessão."
            },
            {
                status: 500
            }
        );
    }
}
