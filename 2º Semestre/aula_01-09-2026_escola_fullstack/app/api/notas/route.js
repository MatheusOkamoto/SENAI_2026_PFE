
import db from "../../db/banco";
import { NextResponse } from "next/server";

// Listar notas ordenadas pelo nome do aluno
export async function GET() {
    try {
        const notas = db.prepare(`
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
            ORDER BY alunos.nome
        `).all();

        return NextResponse.json(notas);

    } catch (error) {
        console.error("Erro ao buscar notas", error);

        return NextResponse.json(
            { erro: "Erro ao buscar notas." },
            { status: 500 }
        );
    }
}

// Cadastrar notas
export async function POST(request) {
    try {
        const dados = await request.json();

        const aluno_id = Number(dados.aluno_id);
        const campos = ["t1", "t2", "n1", "n2", "n3"];

        const notasValidas = campos.every((campo) => {
            const valor = dados[campo];

            return valor !== "" &&
                valor !== null &&
                valor !== undefined &&
                Number.isFinite(Number(valor)) &&
                Number(valor) >= 0 &&
                Number(valor) <= 10;
        });

        if (
            !Number.isSafeInteger(aluno_id) ||
            aluno_id <= 0 ||
            !notasValidas
        ) {
            return NextResponse.json(
                { erro: "Informe um aluno e notas entre 0 e 10." },
                { status: 400 }
            );
        }

        const aluno = db.prepare(`
            SELECT id_aluno FROM alunos
            WHERE id_aluno = ?
        `).get(aluno_id);

        if (!aluno) {
            return NextResponse.json(
                { erro: "Aluno não encontrado." },
                { status: 404 }
            );
        }

        const existente = db.prepare(`
            SELECT id_notas FROM notas
            WHERE aluno_id = ?
        `).get(aluno_id);

        if (existente) {
            return NextResponse.json(
                { erro: "Este aluno já possui notas cadastradas." },
                { status: 409 }
            );
        }

        const sql = db.prepare(`
            INSERT INTO notas
            (aluno_id, t1, t2, n1, n2, n3)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        sql.run(
            aluno_id,
            Number(dados.t1),
            Number(dados.t2),
            Number(dados.n1),
            Number(dados.n2),
            Number(dados.n3)
        );

        return NextResponse.json({
            mensagem: "Notas cadastradas com sucesso!"
        }, { status: 201 });

    } catch (error) {
        console.error("Erro ao cadastrar notas", error);

        return NextResponse.json(
            { erro: "Erro ao cadastrar notas." },
            { status: 500 }
        );
    }
}

// Editar notas
export async function PUT(request) {
    try {
        const dados = await request.json();
        const id_notas = Number(dados.id_notas);
        const campos = ["t1", "t2", "n1", "n2", "n3"];

        const notasValidas = campos.every((campo) => {
            const valor = dados[campo];

            return valor !== "" &&
                valor !== null &&
                valor !== undefined &&
                Number.isFinite(Number(valor)) &&
                Number(valor) >= 0 &&
                Number(valor) <= 10;
        });

        if (
            !Number.isSafeInteger(id_notas) ||
            id_notas <= 0 ||
            !notasValidas
        ) {
            return NextResponse.json(
                { erro: "ID ou notas inválidas." },
                { status: 400 }
            );
        }

        const sql = db.prepare(`
            UPDATE notas
            SET t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
            WHERE id_notas = ?
        `);

        const resultado = sql.run(
            Number(dados.t1),
            Number(dados.t2),
            Number(dados.n1),
            Number(dados.n2),
            Number(dados.n3),
            id_notas
        );

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Registro de notas não encontrado." },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Notas atualizadas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao editar notas", error);

        return NextResponse.json(
            { erro: "Erro ao editar notas." },
            { status: 500 }
        );
    }
}

// Excluir notas
export async function DELETE(request) {
    try {
        const dados = await request.json();
        const id_notas = Number(dados.id_notas);

        if (
            !Number.isSafeInteger(id_notas) ||
            id_notas <= 0
        ) {
            return NextResponse.json(
                { erro: "ID de notas inválido." },
                { status: 400 }
            );
        }

        const sql = db.prepare(`
            DELETE FROM notas
            WHERE id_notas = ?
        `);

        const resultado = sql.run(id_notas);

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Registro de notas não encontrado." },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Notas excluídas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao excluir notas", error);

        return NextResponse.json(
            { erro: "Erro ao excluir notas." },
            { status: 500 }
        );
    }
}
