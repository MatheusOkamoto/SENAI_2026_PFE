
import db from "../../db/banco.js";
import { NextResponse } from "next/server";

const campos = ["t1", "t2", "n1", "n2", "n3"];

function respostaErro(message, status = 400) {
    return NextResponse.json({ message }, { status });
}

function idValido(valor) {
    const numero = Number(valor);

    return Number.isSafeInteger(numero) && numero > 0;
}

function validarNotas(dados) {
    if (!idValido(dados?.aluno_id)) {
        return "Informe um aluno válido.";
    }

    for (const campo of campos) {
        const valor = dados[campo];

        if (
            valor === undefined ||
            valor === null ||
            valor === "" ||
            !Number.isFinite(Number(valor)) ||
            Number(valor) < 0 ||
            Number(valor) > 10
        ) {
            return `${campo}: informe uma nota entre 0 e 10.`;
        }
    }

    return null;
}

function alunoExiste(id) {
    return Boolean(
        db.prepare(
            "SELECT id_aluno FROM alunos WHERE id_aluno = ?"
        ).get(id)
    );
}

const consultaNotas = `
    SELECT
        notas.id_notas,
        notas.aluno_id,
        alunos.nome,
        alunos.ra,
        notas.t1,
        notas.t2,
        notas.n1,
        notas.n2,
        notas.n3,
        ROUND(
            (notas.t1 + notas.t2 + notas.n1 +
             notas.n2 + notas.n3) / 5.0, 2
        ) AS media
    FROM notas
    INNER JOIN alunos
        ON notas.aluno_id = alunos.id_aluno
`;

export async function GET(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");
        const alunoId = url.searchParams.get("aluno_id");

        if (id !== null) {
            if (!idValido(id)) {
                return respostaErro("ID inválido.");
            }

            const nota = db.prepare(
                `${consultaNotas}
                 WHERE notas.id_notas = ?`
            ).get(Number(id));

            if (!nota) {
                return respostaErro(
                    "Registro não encontrado.", 404
                );
            }

            return NextResponse.json(nota);
        }

        if (alunoId !== null && !idValido(alunoId)) {
            return respostaErro("Aluno inválido.");
        }

        const sql = alunoId === null
            ? `${consultaNotas} ORDER BY alunos.nome`
            : `${consultaNotas}
               WHERE notas.aluno_id = ?
               ORDER BY notas.id_notas DESC`;

        const notas = alunoId === null
            ? db.prepare(sql).all()
            : db.prepare(sql).all(Number(alunoId));

        return NextResponse.json(notas);

    } catch (error) {
        console.error("Erro ao consultar notas:", error);
        return respostaErro("Erro interno do servidor.", 500);
    }
}

export async function POST(request) {
    try {
        const dados = await request.json();
        const erro = validarNotas(dados);

        if (erro) return respostaErro(erro);

        const alunoId = Number(dados.aluno_id);

        if (!alunoExiste(alunoId)) {
            return respostaErro("Aluno não encontrado.", 404);
        }

        const resultado = db.prepare(`
            INSERT INTO notas
            (aluno_id, t1, t2, n1, n2, n3)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(
            alunoId,
            ...campos.map(campo => Number(dados[campo]))
        );

        return NextResponse.json({
            message: "Notas cadastradas com sucesso!",
            id_notas: Number(resultado.lastInsertRowid)
        }, { status: 201 });

    } catch (error) {
        console.error("Erro ao cadastrar notas:", error);
        return respostaErro("Erro interno do servidor.", 500);
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();

        if (!idValido(dados?.id_notas)) {
            return respostaErro("ID do registro inválido.");
        }

        const erro = validarNotas(dados);
        if (erro) return respostaErro(erro);

        const idNotas = Number(dados.id_notas);
        const alunoId = Number(dados.aluno_id);

        if (!alunoExiste(alunoId)) {
            return respostaErro("Aluno não encontrado.", 404);
        }

        const resultado = db.prepare(`
            UPDATE notas
            SET aluno_id = ?,
                t1 = ?, t2 = ?,
                n1 = ?, n2 = ?, n3 = ?
            WHERE id_notas = ?
        `).run(
            alunoId,
            ...campos.map(campo => Number(dados[campo])),
            idNotas
        );

        if (resultado.changes === 0) {
            return respostaErro(
                "Registro não encontrado.", 404
            );
        }

        return NextResponse.json({
            message: "Notas atualizadas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao atualizar notas:", error);
        return respostaErro("Erro interno do servidor.", 500);
    }
}

export async function DELETE(request) {
    try {
        const dados = await request.json();

        if (!idValido(dados?.id_notas)) {
            return respostaErro("ID do registro inválido.");
        }

        const resultado = db.prepare(`
            DELETE FROM notas
            WHERE id_notas = ?
        `).run(Number(dados.id_notas));

        if (resultado.changes === 0) {
            return respostaErro(
                "Registro não encontrado.", 404
            );
        }

        return NextResponse.json({
            message: "Notas excluídas com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao excluir notas:", error);
        return respostaErro("Erro interno do servidor.", 500);
    }
}
