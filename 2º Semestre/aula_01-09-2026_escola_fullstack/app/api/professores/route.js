
import db from "../../db/banco";
import { NextResponse } from "next/server";
import { exigirAutenticacao } from "../../lib/auth";

export const runtime = "nodejs";

// ============================================
// DIAS DA SEMANA PERMITIDOS
// ============================================

const DIAS_VALIDOS = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];


// ============================================
// LISTAR PROFESSORES
// ============================================

export async function GET(request) {
    try {
        // Verificar autenticação
        const acessoNegado = exigirAutenticacao(request);

        if (acessoNegado) {
            return acessoNegado;
        }

        // Buscar professores e suas disciplinas
        const professores = db.prepare(`
            SELECT
                professores.id_professor,
                professores.nome,
                professores.nif,
                professores.dias_aula,
                professores.disciplina_id,
                disciplinas.nome AS disciplina_nome,
                professores.total_aulas_semana

            FROM professores

            INNER JOIN disciplinas
                ON professores.disciplina_id =
                   disciplinas.id_disciplina

            ORDER BY professores.nome ASC
        `).all();

        // Converter os dias de JSON para array
        const resultado = professores.map((professor) => ({
            ...professor,
            dias_aula: JSON.parse(professor.dias_aula)
        }));

        // Retornar a lista de professores
        return NextResponse.json(resultado);

    } catch (error) {
        console.error(
            "Erro ao listar professores:",
            error
        );

        return NextResponse.json(
            { erro: "Erro ao buscar professores." },
            { status: 500 }
        );
    }
}


// ============================================
// CADASTRAR PROFESSOR
// ============================================

export async function POST(request) {
    try {
        // Verificar autenticação
        const acessoNegado = exigirAutenticacao(request);

        if (acessoNegado) {
            return acessoNegado;
        }

        // Receber os dados enviados pelo formulário
        const dados = await request.json();

        const nome = typeof dados.nome === "string"
            ? dados.nome.trim()
            : "";

        const nif = typeof dados.nif === "string"
            ? dados.nif.trim().toUpperCase()
            : "";

        const dias_aula = dados.dias_aula;

        const disciplina_id = Number(
            dados.disciplina_id
        );

        const total_aulas_semana = Number(
            dados.total_aulas_semana
        );


        // ========================================
        // VALIDAR NOME
        // ========================================

        if (nome.length < 2 || nome.length > 100) {
            return NextResponse.json(
                {
                    erro: "O nome deve ter entre 2 e 100 caracteres."
                },
                { status: 400 }
            );
        }


        // ========================================
        // VALIDAR MATRÍCULA (NIF)
        // ========================================

        if (!nif || nif.length > 30) {
            return NextResponse.json(
                {
                    erro: "Informe uma matrícula NIF válida."
                },
                { status: 400 }
            );
        }

        // Verificar se o NIF já está cadastrado
        const nifExistente = db.prepare(`
            SELECT id_professor
            FROM professores
            WHERE nif = ?
        `).get(nif);

        if (nifExistente) {
            return NextResponse.json(
                {
                    erro: "Esta matrícula NIF já está cadastrada."
                },
                { status: 409 }
            );
        }


        // ========================================
        // VALIDAR DIAS DE AULA
        // ========================================

        if (
            !Array.isArray(dias_aula) ||
            dias_aula.length === 0
        ) {
            return NextResponse.json(
                {
                    erro: "Selecione pelo menos um dia de aula."
                },
                { status: 400 }
            );
        }

        // Verificar se todos os dias são válidos
        const diasCorretos = dias_aula.every(
            (dia) => DIAS_VALIDOS.includes(dia)
        );

        if (!diasCorretos) {
            return NextResponse.json(
                {
                    erro: "Um ou mais dias de aula são inválidos."
                },
                { status: 400 }
            );
        }

        // Impedir dias repetidos
        const diasUnicos = [...new Set(dias_aula)];

        if (diasUnicos.length !== dias_aula.length) {
            return NextResponse.json(
                {
                    erro: "Não é permitido repetir dias de aula."
                },
                { status: 400 }
            );
        }


        // ========================================
        // VALIDAR DISCIPLINA (FK)
        // ========================================

        if (
            !Number.isSafeInteger(disciplina_id) ||
            disciplina_id <= 0
        ) {
            return NextResponse.json(
                {
                    erro: "Selecione uma disciplina válida."
                },
                { status: 400 }
            );
        }

        // Verificar se a disciplina existe
        const disciplina = db.prepare(`
            SELECT id_disciplina
            FROM disciplinas
            WHERE id_disciplina = ?
        `).get(disciplina_id);

        if (!disciplina) {
            return NextResponse.json(
                {
                    erro: "A disciplina selecionada não existe."
                },
                { status: 404 }
            );
        }


        // ========================================
        // VALIDAR TOTAL DE AULAS SEMANAIS
        // ========================================

        if (
            !Number.isSafeInteger(total_aulas_semana) ||
            total_aulas_semana <= 0
        ) {
            return NextResponse.json(
                {
                    erro: "Informe um total válido de aulas semanais."
                },
                { status: 400 }
            );
        }


        // ========================================
        // SALVAR PROFESSOR NO SQLITE
        // ========================================

        // Converter dias de aula para JSON
        const diasJSON = JSON.stringify(diasUnicos);

        const sql = db.prepare(`
            INSERT INTO professores (
                nome,
                nif,
                dias_aula,
                disciplina_id,
                total_aulas_semana
            )
            VALUES (?, ?, ?, ?, ?)
        `);

        const resultado = sql.run(
            nome,
            nif,
            diasJSON,
            disciplina_id,
            total_aulas_semana
        );


        // ========================================
        // RETORNAR SUCESSO
        // ========================================

        return NextResponse.json(
            {
                mensagem: "Professor cadastrado com sucesso!",
                id_professor: Number(
                    resultado.lastInsertRowid
                )
            },
            { status: 201 }
        );

    } catch (error) {

        // Tratar matrícula duplicada
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return NextResponse.json(
                {
                    erro: "Esta matrícula NIF já está cadastrada."
                },
                { status: 409 }
            );
        }

        // Tratar disciplina inexistente
        if (
            error.code === "SQLITE_CONSTRAINT_FOREIGNKEY"
        ) {
            return NextResponse.json(
                {
                    erro: "A disciplina informada não existe."
                },
                { status: 400 }
            );
        }

        // Tratar JSON inválido
        if (error instanceof SyntaxError) {
            return NextResponse.json(
                {
                    erro: "Os dados enviados são inválidos."
                },
                { status: 400 }
            );
        }

        console.error(
            "Erro ao cadastrar professor:",
            error
        );

        return NextResponse.json(
            {
                erro: "Erro ao cadastrar professor."
            },
            { status: 500 }
        );
    }
}
