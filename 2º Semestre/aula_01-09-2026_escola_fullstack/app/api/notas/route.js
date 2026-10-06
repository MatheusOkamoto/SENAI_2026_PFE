import db from "../../db/banco.js";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const notas = db.prepare(`
            SELECT
                notas.id_notas,
                notas.aluno_id,
                alunos.nome,
                alunos.ra,
                notas.t1,
                notas.t2,
                notas.n1,
                notas.n2,
                notas.n3
            FROM notas
            INNER JOIN alunos
                ON notas.aluno_id = alunos.id_aluno
            ORDER BY alunos.nome
        `).all();

        return NextResponse.json(notas);

    } catch (error) {
        console.error("Erro ao listar notas:", error);

        return NextResponse.json(
            { message: "Erro ao listar notas." },
            { status: 500 }
        );
    }
}


export async function POST(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            INSERT INTO notas (
                aluno_id,
                t1,
                t2,
                n1,
                n2,
                n3
            )
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        sql.run(
            dados.aluno_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3
        );

        return NextResponse.json({
            message: "Notas cadastradas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao cadastrar notas:", error);

        return NextResponse.json(
            { message: "Erro ao cadastrar notas." },
            { status: 500 }
        );
    }
}


export async function PUT(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            UPDATE notas
            SET
                aluno_id = ?,
                t1 = ?,
                t2 = ?,
                n1 = ?,
                n2 = ?,
                n3 = ?
            WHERE id_notas = ?
        `);

        sql.run(
            dados.aluno_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3,
            dados.id_notas
        );

        return NextResponse.json({
            message: "Notas editadas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao editar notas:", error);

        return NextResponse.json(
            { message: "Erro ao editar notas." },
            { status: 500 }
        );
    }
}


export async function DELETE(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            DELETE FROM notas
            WHERE id_notas = ?
        `);

        sql.run(dados.id_notas);

        return NextResponse.json({
            message: "Notas deletadas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao deletar notas:", error);

        return NextResponse.json(
            { message: "Erro ao deletar notas." },
            { status: 500 }
        );
    }
}