
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";

// ============================================
// DIAS DA SEMANA
// ============================================

const DIAS_SEMANA = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

export default function CadProfessores() {

    const router = useRouter();

    // Dados do formulário
    const [nome, setNome] = useState("");
    const [nif, setNif] = useState("");
    const [diasAula, setDiasAula] = useState([]);
    const [disciplinaId, setDisciplinaId] = useState("");
    const [totalAulasSemana, setTotalAulasSemana] = useState("");

    // Disciplinas disponíveis
    const [disciplinas, setDisciplinas] = useState([]);
    const [carregandoDisciplinas, setCarregandoDisciplinas] =
        useState(true);
    const [tentativa, setTentativa] = useState(0);

    // Mensagens e estados
    const [erro, setErro] = useState("");
    const [erroDisciplinas, setErroDisciplinas] = useState("");
    const [salvando, setSalvando] = useState(false);


    // ============================================
    // CARREGAR DISCIPLINAS DO BANCO
    // ============================================

    useEffect(() => {

        const controller = new AbortController();

        async function carregarDisciplinas() {

            setCarregandoDisciplinas(true);
            setErroDisciplinas("");

            try {
                const resposta = await fetch(
                    "/api/disciplinas",
                    {
                        method: "GET",
                        cache: "no-store",
                        signal: controller.signal
                    }
                );

                if (controller.signal.aborted) return;

                if (resposta.status === 401) {
                    router.replace("/login");
                    return;
                }

                const dados = await resposta.json();

                if (!resposta.ok) {
                    throw new Error(
                        dados.erro ||
                        "Erro ao carregar disciplinas."
                    );
                }

                if (!Array.isArray(dados)) {
                    throw new Error(
                        "Formato de dados inválido."
                    );
                }

                setDisciplinas(dados);

            } catch (error) {

                if (controller.signal.aborted) return;

                console.error(
                    "Erro ao buscar disciplinas:",
                    error
                );

                setErroDisciplinas(
                    error.message ||
                    "Não foi possível carregar as disciplinas."
                );

            } finally {

                if (!controller.signal.aborted) {
                    setCarregandoDisciplinas(false);
                }
            }
        }

        carregarDisciplinas();

        return () => controller.abort();

    }, [router, tentativa]);


    // ============================================
    // SELECIONAR DIAS DA SEMANA
    // ============================================

    function alterarDia(dia) {

        setDiasAula((diasAtuais) => {

            // Remover o dia se já estiver selecionado
            if (diasAtuais.includes(dia)) {
                return diasAtuais.filter(
                    (item) => item !== dia
                );
            }

            // Adicionar o novo dia
            return [...diasAtuais, dia];
        });
    }


    // ============================================
    // CADASTRAR PROFESSOR
    // ============================================

    async function cadastrarProfessor(evento) {

        evento.preventDefault();
        setErro("");

        const nomeFormatado = nome.trim();
        const nifFormatado = nif.trim().toUpperCase();
        const idDisciplina = Number(disciplinaId);
        const totalAulas = Number(totalAulasSemana);

        // Validar nome
        if (
            nomeFormatado.length < 2 ||
            nomeFormatado.length > 100
        ) {
            setErro(
                "O nome deve ter entre 2 e 100 caracteres."
            );
            return;
        }

        // Validar NIF
        if (
            !nifFormatado ||
            nifFormatado.length > 30
        ) {
            setErro("Informe uma matrícula NIF válida.");
            return;
        }

        // Validar dias de aula
        if (diasAula.length === 0) {
            setErro(
                "Selecione pelo menos um dia de aula."
            );
            return;
        }

        // Validar disciplina
        if (
            !Number.isSafeInteger(idDisciplina) ||
            idDisciplina <= 0 ||
            !disciplinas.some(
                (disciplina) =>
                    disciplina.id_disciplina === idDisciplina
            )
        ) {
            setErro("Selecione uma disciplina válida.");
            return;
        }

        // Validar total de aulas
        if (
            totalAulasSemana === "" ||
            !Number.isSafeInteger(totalAulas) ||
            totalAulas <= 0
        ) {
            setErro(
                "Informe um total válido de aulas semanais."
            );
            return;
        }

        setSalvando(true);

        try {

            // Enviar os dados para a API
            const resposta = await fetch(
                "/api/professores",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nome: nomeFormatado,
                        nif: nifFormatado,
                        dias_aula: diasAula,
                        disciplina_id: idDisciplina,
                        total_aulas_semana: totalAulas
                    })
                }
            );

            const dados = await resposta.json();

            // Verificar se a sessão expirou
            if (resposta.status === 401) {
                router.replace("/login");
                return;
            }

            // Tratar erros da API
            if (!resposta.ok) {
                setErro(
                    dados.erro ||
                    "Não foi possível cadastrar o professor."
                );
                return;
            }

            // Redirecionar para a listagem
            router.push("/listprofessores");
            router.refresh();

        } catch (error) {

            console.error(
                "Erro ao cadastrar professor:",
                error
            );

            setErro(
                "Não foi possível conectar ao servidor."
            );

        } finally {
            setSalvando(false);
        }
    }


    // ============================================
    // INTERFACE
    // ============================================

    return (
        <>
            <Header />

            <main className="main">
                <section className="container">

                    <div className="painel">

                        {/* Apresentação */}

                        <div className="apresentacao">
                            <p className="status">
                                SISTEMA ONLINE ● CORPO DOCENTE
                            </p>

                            <h1>
                                Cadastro de Professores
                            </h1>

                            <p className="descricao">
                                Cadastre os professores da instituição,
                                vincule suas disciplinas e organize
                                os dias e a quantidade de aulas semanais.
                            </p>

                            <Link
                                href="/listprofessores"
                                className="linkLista"
                            >
                                Consultar professores cadastrados →
                            </Link>
                        </div>


                        {/* Formulário */}

                        <form
                            className="formulario"
                            onSubmit={cadastrarProfessor}
                        >

                            <h2>Dados do Professor</h2>


                            {/* Nome */}

                            <div className="campo">
                                <label htmlFor="nome">
                                    Nome Completo
                                </label>

                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Ex.: Carlos Henrique Silva"
                                    value={nome}
                                    onChange={(e) =>
                                        setNome(e.target.value)
                                    }
                                    minLength={2}
                                    maxLength={100}
                                    autoComplete="name"
                                    required
                                />
                            </div>


                            {/* NIF */}

                            <div className="campo">
                                <label htmlFor="nif">
                                    Matrícula (NIF)
                                </label>

                                <input
                                    id="nif"
                                    name="nif"
                                    type="text"
                                    placeholder="Ex.: 123456"
                                    value={nif}
                                    onChange={(e) =>
                                        setNif(e.target.value)
                                    }
                                    maxLength={30}
                                    required
                                />
                            </div>


                            {/* Disciplina responsável */}

                            <div className="campo">
                                <label htmlFor="disciplina">
                                    Disciplina Responsável
                                </label>

                                <select
                                    id="disciplina"
                                    name="disciplina"
                                    value={disciplinaId}
                                    onChange={(e) =>
                                        setDisciplinaId(e.target.value)
                                    }
                                    disabled={
                                        carregandoDisciplinas ||
                                        !!erroDisciplinas ||
                                        disciplinas.length === 0
                                    }
                                    required
                                >
                                    <option value="">
                                        {carregandoDisciplinas
                                            ? "Carregando disciplinas..."
                                            : "Selecione uma disciplina"}
                                    </option>

                                    {disciplinas.map(
                                        (disciplina) => (
                                            <option
                                                key={
                                                    disciplina.id_disciplina
                                                }
                                                value={
                                                    disciplina.id_disciplina
                                                }
                                            >
                                                {disciplina.nome}
                                            </option>
                                        )
                                    )}
                                </select>

                                {erroDisciplinas && (
                                    <div
                                        className="aviso"
                                        role="alert"
                                    >
                                        <p>{erroDisciplinas}</p>

                                        <button
                                            type="button"
                                            className="tentar"
                                            onClick={() =>
                                                setTentativa(
                                                    (valor) => valor + 1
                                                )
                                            }
                                        >
                                            Tentar novamente
                                        </button>
                                    </div>
                                )}

                                {!carregandoDisciplinas &&
                                    !erroDisciplinas &&
                                    disciplinas.length === 0 && (
                                        <p className="aviso">
                                            Nenhuma disciplina cadastrada.
                                            {" "}
                                            <Link href="/caddisciplinas">
                                                Cadastrar disciplina
                                            </Link>
                                        </p>
                                    )}
                            </div>


                            {/* Dias em que ministra aulas */}

                            <fieldset className="campo diasCampo">

                                <legend>
                                    Dias que Ministra Aula
                                </legend>

                                <p className="ajuda">
                                    Selecione todos os dias em que
                                    o professor ministra aulas.
                                </p>

                                <div className="diasGrid">

                                    {DIAS_SEMANA.map((dia) => (

                                        <label
                                            key={dia}
                                            className={
                                                diasAula.includes(dia)
                                                    ? "dia ativo"
                                                    : "dia"
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                checked={
                                                    diasAula.includes(dia)
                                                }
                                                onChange={() =>
                                                    alterarDia(dia)
                                                }
                                            />

                                            <span>{dia}</span>
                                        </label>

                                    ))}

                                </div>

                            </fieldset>


                            {/* Total de aulas semanais */}

                            <div className="campo">
                                <label htmlFor="totalAulas">
                                    Total de Aulas na Semana
                                </label>

                                <input
                                    id="totalAulas"
                                    name="totalAulas"
                                    type="number"
                                    min="1"
                                    step="1"
                                    placeholder="Ex.: 6"
                                    value={totalAulasSemana}
                                    onChange={(e) =>
                                        setTotalAulasSemana(e.target.value)
                                    }
                                    required
                                />

                                <small>
                                    Informe a quantidade total
                                    de aulas ministradas por semana.
                                </small>
                            </div>


                            {/* Erros */}

                            {erro && (
                                <p
                                    className="erro"
                                    role="alert"
                                >
                                    {erro}
                                </p>
                            )}


                            {/* Botões */}

                            <div className="acoes">
                                <Link
                                    href="/listprofessores"
                                    className="botaoSecundario"
                                >
                                    Cancelar
                                </Link>

                                <button
                                    type="submit"
                                    className="botao"
                                    disabled={
                                        salvando ||
                                        carregandoDisciplinas ||
                                        !!erroDisciplinas ||
                                        disciplinas.length === 0
                                    }
                                >
                                    {salvando
                                        ? "Salvando..."
                                        : "Salvar Professor"}
                                </button>
                            </div>

                        </form>
                    </div>
                </section>
            </main>


            {/* ====================================
                ESTILOS DA PÁGINA
            ==================================== */}

            <style jsx>{`

                .main {
                    min-height: calc(100vh - 82px);
                    padding: 85px 24px 110px;
                    background: #f6f6f6;
                    color: #202020;
                }

                .container {
                    max-width: 1180px;
                    margin: 0 auto;
                }

                .painel {
                    display: grid;
                    grid-template-columns:
                        minmax(0, 0.85fr)
                        minmax(0, 1.15fr);
                    align-items: start;
                    gap: 90px;
                }

                /* APRESENTAÇÃO */

                .apresentacao {
                    padding-top: 35px;
                }

                .status {
                    margin-bottom: 18px;
                    color: #e30613;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.16em;
                    line-height: 1.6;
                }

                h1 {
                    max-width: 480px;
                    color: #202020;
                    font-size: clamp(45px, 5vw, 65px);
                    font-weight: 750;
                    line-height: 1.02;
                    letter-spacing: -0.05em;
                }

                h1::after {
                    content: ".";
                    color: #e30613;
                }

                .descricao {
                    max-width: 430px;
                    margin-top: 25px;
                    color: #696969;
                    font-size: 15px;
                    line-height: 1.75;
                }

                .linkLista {
                    display: inline-block;
                    margin-top: 30px;
                    color: #e30613;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .linkLista:hover {
                    text-decoration: underline;
                }

                /* FORMULÁRIO */

                .formulario {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    padding: 42px;
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                }

                .formulario h2 {
                    padding-bottom: 25px;
                    margin-bottom: 10px;
                    color: #202020;
                    font-size: 23px;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    border-bottom: 1px solid #e5e5e5;
                }

                /* CAMPOS */

                .campo {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                    min-width: 0;
                }

                .campo label,
                .diasCampo legend {
                    color: #333333;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                }

                .campo input:not([type="checkbox"]),
                .campo select {
                    width: 100%;
                    height: 53px;
                    padding: 0 15px;
                    background: #fafafa;
                    border: 1px solid #dddddd;
                    border-radius: 0;
                    outline: none;
                    color: #202020;
                    font-family: inherit;
                    font-size: 14px;
                    transition:
                        border-color 0.2s ease,
                        background 0.2s ease,
                        box-shadow 0.2s ease;
                }

                .campo input:hover,
                .campo select:hover {
                    border-color: #bfbfbf;
                }

                .campo input:focus,
                .campo select:focus {
                    background: #ffffff;
                    border-color: #e30613;
                    box-shadow:
                        0 0 0 3px rgba(227, 6, 19, 0.07);
                }

                .campo select:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .campo small,
                .ajuda {
                    color: #777777;
                    font-size: 12px;
                    line-height: 1.6;
                }

                /* DIAS DA SEMANA */

                .diasCampo {
                    min-width: 0;
                    margin: 0;
                    padding: 0;
                    border: none;
                }

                .diasCampo legend {
                    margin-bottom: 10px;
                }

                .ajuda {
                    margin-bottom: 15px;
                }

                .diasGrid {
                    display: grid;
                    grid-template-columns:
                        repeat(2, minmax(0, 1fr));
                    gap: 10px;
                }

                .dia {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-height: 47px;
                    padding: 12px;
                    background: #fafafa;
                    border: 1px solid #dddddd;
                    cursor: pointer;
                    transition:
                        border-color 0.2s ease,
                        background 0.2s ease;
                }

                .dia:hover {
                    border-color: #e30613;
                }

                .dia.ativo {
                    background: #fff1f2;
                    border-color: #e30613;
                }

                .dia input {
                    width: 16px;
                    height: 16px;
                    flex-shrink: 0;
                    accent-color: #e30613;
                    cursor: pointer;
                }

                .dia span {
                    color: #333333;
                    font-size: 12px;
                    font-weight: 600;
                }

                /* AVISOS E ERROS */

                .aviso {
                    padding: 12px 14px;
                    background: #fff7ed;
                    color: #92400e;
                    font-size: 12px;
                    line-height: 1.6;
                }

                .aviso a {
                    color: #b90610;
                    font-weight: 700;
                    text-decoration: underline;
                }

                .tentar {
                    margin-top: 8px;
                    padding: 8px 12px;
                    background: #ffffff;
                    color: #92400e;
                    border: 1px solid #f0c58a;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .erro {
                    padding: 14px 16px;
                    color: #b42318;
                    background: #fff1f2;
                    border-left: 3px solid #e30613;
                    font-size: 13px;
                    line-height: 1.6;
                }

                /* BOTÕES */

                .acoes {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-top: 10px;
                }

                .botao,
                .botaoSecundario {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 51px;
                    padding: 0 24px;
                    font-family: inherit;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition:
                        background 0.2s ease,
                        transform 0.2s ease;
                }

                .botao {
                    background: #e30613;
                    border: 1px solid #e30613;
                    color: #ffffff;
                }

                .botao:hover:not(:disabled) {
                    background: #b90610;
                    transform: translateY(-2px);
                }

                .botao:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .botaoSecundario {
                    background: #ffffff;
                    border: 1px solid #dddddd;
                    color: #555555;
                    text-decoration: none;
                }

                .botaoSecundario:hover {
                    background: #f5f5f5;
                }

                /* RESPONSIVIDADE */

                @media (max-width: 950px) {

                    .painel {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .apresentacao {
                        padding-top: 0;
                    }
                }

                @media (max-width: 700px) {

                    .main {
                        padding: 60px 15px 75px;
                    }

                    h1 {
                        font-size: 43px;
                    }

                    .formulario {
                        padding: 28px 20px;
                    }

                    .diasGrid {
                        grid-template-columns: 1fr;
                    }

                    .acoes {
                        flex-direction: column-reverse;
                    }

                    .botao,
                    .botaoSecundario {
                        width: 100%;
                    }
                }

            `}</style>
        </>
    );
}
