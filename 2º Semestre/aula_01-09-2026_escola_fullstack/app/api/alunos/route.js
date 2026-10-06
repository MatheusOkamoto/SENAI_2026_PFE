import db from "../../db/banco.js";

import { NextResponse } from "next/server";



/* =========================================================
   GET
   LISTAR ALUNOS OU BUSCAR UM ALUNO
========================================================= */

export async function GET(request) {

    try {

        const { searchParams } = new URL(request.url);

        const id = searchParams.get("id");


        /* BUSCAR UM ALUNO */

        if (id) {

            const aluno = db.prepare(

                `
                SELECT *
                FROM alunos
                WHERE id_aluno = ?
                `

            ).get(id);


            if (!aluno) {

                return NextResponse.json(

                    {
                        message: "Aluno não encontrado."
                    },

                    {
                        status: 404
                    }

                );

            }


            return NextResponse.json(aluno);

        }



        /* LISTAR TODOS OS ALUNOS */

        const alunos = db.prepare(

            `
            SELECT *
            FROM alunos
            ORDER BY nome
            `

        ).all();


        return NextResponse.json(alunos);


    } catch (error) {

        console.error(
            "Erro ao listar alunos:",
            error
        );


        return NextResponse.json(

            {
                message: "Erro ao listar alunos."
            },

            {
                status: 500
            }

        );

    }

}



/* =========================================================
   POST
   CADASTRAR ALUNO
========================================================= */

export async function POST(request) {

    try {

        const dados = await request.json();


        const sql = db.prepare(

            `
            INSERT INTO alunos
            (
                nome,
                idade,
                serie,
                ra
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?
            )
            `

        );


        const resultado = sql.run(

            dados.nome,

            dados.idade,

            dados.serie,

            dados.ra

        );


        return NextResponse.json(

            {

                message:
                    "Aluno cadastrado com sucesso!",

                id_aluno:
                    resultado.lastInsertRowid

            },

            {
                status: 201
            }

        );


    } catch (error) {

        console.error(
            "Erro ao cadastrar aluno:",
            error
        );


        if (
            error.message.includes("UNIQUE")
        ) {

            return NextResponse.json(

                {
                    message:
                        "Já existe um aluno com este RA."
                },

                {
                    status: 400
                }

            );

        }


        return NextResponse.json(

            {
                message:
                    "Erro ao cadastrar aluno."
            },

            {
                status: 500
            }

        );

    }

}



/* =========================================================
   PUT
   EDITAR ALUNO
========================================================= */

export async function PUT(request) {

    try {

        const dados = await request.json();


        const sql = db.prepare(

            `
            UPDATE alunos

            SET

                nome = ?,

                idade = ?,

                serie = ?,

                ra = ?

            WHERE id_aluno = ?
            `

        );


        const resultado = sql.run(

            dados.nome,

            dados.idade,

            dados.serie,

            dados.ra,

            dados.id_aluno

        );


        if (resultado.changes === 0) {

            return NextResponse.json(

                {
                    message:
                        "Aluno não encontrado."
                },

                {
                    status: 404
                }

            );

        }


        return NextResponse.json({

            message:
                "Aluno editado com sucesso!"

        });


    } catch (error) {

        console.error(
            "Erro ao editar aluno:",
            error
        );


        if (
            error.message.includes("UNIQUE")
        ) {

            return NextResponse.json(

                {
                    message:
                        "Já existe um aluno com este RA."
                },

                {
                    status: 400
                }

            );

        }


        return NextResponse.json(

            {
                message:
                    "Erro ao editar aluno."
            },

            {
                status: 500
            }

        );

    }

}



/* =========================================================
   DELETE
   EXCLUIR ALUNO
========================================================= */

export async function DELETE(request) {

    try {

        const dados = await request.json();


        const sql = db.prepare(

            `
            DELETE FROM alunos
            WHERE id_aluno = ?
            `

        );


        const resultado = sql.run(

            dados.id_aluno

        );


        if (resultado.changes === 0) {

            return NextResponse.json(

                {
                    message:
                        "Aluno não encontrado."
                },

                {
                    status: 404
                }

            );

        }


        return NextResponse.json({

            message:
                "Aluno excluído com sucesso!"

        });


    } catch (error) {

        console.error(
            "Erro ao excluir aluno:",
            error
        );


        return NextResponse.json(

            {
                message:
                    "Erro ao excluir aluno."
            },

            {
                status: 500
            }

        );

    }

}