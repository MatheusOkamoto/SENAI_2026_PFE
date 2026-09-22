import db from "../../db/banco.js";
import { NextResponse } from "next/server";

export async function listarAlunos() {
    const alunos = db.prepare("SELECT * FROM alunos ORDER BY nome")
    return NextResponse.json(alunos);
}

export async function salvarAlunos(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(
            `INSERT INTO alunos (nome, idade, serie, ra) VALUES (?, ?, ?, ?)`)
            sql.run(
                dados.nome,
                dados.idade,
                dados.serie,
                dados.ra
            )
            return NextResponse.json({ message: "Aluno cadastrado com sucesso!" });
    } catch (error) {
        console.error("Erro ao cadastrar aluno:", error);
    }
}

export async function editarAlunos(request) {

    try {

        const dados = await request.json();

        const sql = db.prepare(
            `UPDATE alunos SET nome = ?, idade = ?, serie = ?, ra = ? WHERE id_aluno = ?`
        );

        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra,
            dados.id_aluno
        );

        return NextResponse.json({ message: "Aluno editado com sucesso!" });

    } catch (error) {

        console.error("Erro ao editar aluno:", error);

    }

}

export async function deletarAlunos(request) {

    try {

        const dados = await request.json();

        const sql = db.prepare(
            `DELETE FROM alunos WHERE id_aluno = ?`
        );

        sql.run(
            dados.id_aluno
        );

        return NextResponse.json({ message: "Aluno deletado com sucesso!" });

    } catch (error) {

        console.error("Erro ao deletar aluno:", error);

    }

}