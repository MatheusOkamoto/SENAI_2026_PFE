import db from "../../db/banco";
import { NextResponse } from "next/server";

export async function GET() {
    const notas = db.prepare(`
        SELECT
            notas.id_notas,
            alunos.id_aluno,
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
}

export async function POST(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            INSERT INTO notas (aluno_id, t1, t2, n1, n2, n3)
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
            mensagem: "Nota salva com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao salvar a nota", error);

        return NextResponse.json(
            { erro: "Erro ao salvar a nota." },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            UPDATE notas
            SET t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
            WHERE id_notas = ?
        `);

        sql.run(
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3,
            dados.id_notas
        );

        return NextResponse.json({
            mensagem: "Nota atualizada com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao editar a nota", error);

        return NextResponse.json(
            { erro: "Erro ao editar a nota." },
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
            mensagem: "Nota excluída com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao excluir a nota", error);

        return NextResponse.json(
            { erro: "Erro ao excluir a nota." },
            { status: 500 }
        );
    }
}