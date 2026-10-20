
import { NextResponse } from "next/server";
import db from "../../../db/banco";

export async function GET(request, { params }) {
    try {
        const resolvedParams = await params;
        const id = Number(resolvedParams?.id);

        if (!Number.isSafeInteger(id) || id <= 0) {
            return NextResponse.json(
                { erro: "ID de nota inválido." },
                { status: 400 }
            );
        }

        const nota = db.prepare(`
            SELECT
                notas.id_notas,
                notas.aluno_id,
                notas.t1,
                notas.t2,
                notas.n1,
                notas.n2,
                notas.n3,
                alunos.nome,
                alunos.ra
            FROM notas
            INNER JOIN alunos
            ON notas.aluno_id = alunos.id_aluno
            WHERE notas.id_notas = ?
        `).get(id);

        if (!nota) {
            return NextResponse.json(
                { erro: "Nota não encontrada." },
                { status: 404 }
            );
        }

        return NextResponse.json(nota);

    } catch (error) {
        console.error("Erro ao buscar nota:", error);

        return NextResponse.json(
            { erro: "Erro ao buscar nota." },
            { status: 500 }
        );
    }
}
