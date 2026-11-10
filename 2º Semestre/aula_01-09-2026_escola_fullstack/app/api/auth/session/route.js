
import { NextResponse } from "next/server";

import {
    obterUsuarioSessao
} from "../../../lib/auth";

export const runtime = "nodejs";

// ============================================
// VERIFICAR SESSÃO DO USUÁRIO
// ============================================

export async function GET(request) {
    try {
        // Buscar o usuário associado à sessão
        const usuario = obterUsuarioSessao(request);

        // Verificar se existe uma sessão válida
        if (!usuario) {
            return NextResponse.json(
                {
                    erro: "Sessão inválida ou expirada."
                },
                {
                    status: 401
                }
            );
        }

        // Retornar os dados do usuário autenticado
        return NextResponse.json(
            {
                mensagem: "Sessão válida.",
                usuario: {
                    id_usuario: usuario.id_usuario,
                    nome: usuario.nome,
                    login: usuario.login
                }
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "no-store"
                }
            }
        );

    } catch (error) {
        console.error(
            "Erro ao verificar sessão:",
            error
        );

        return NextResponse.json(
            {
                erro: "Erro ao verificar a sessão."
            },
            {
                status: 500
            }
        );
    }
}
