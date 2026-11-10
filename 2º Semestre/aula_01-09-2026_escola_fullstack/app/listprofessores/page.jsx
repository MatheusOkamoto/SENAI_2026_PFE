
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";

export default function ListProfessores() {

    const router = useRouter();

    // Estados da página
    const [professores, setProfessores] = useState([]);
    const [busca, setBusca] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");
    const [tentativa, setTentativa] = useState(0);


    // ============================================
    // BUSCAR PROFESSORES CADASTRADOS
    // ============================================

    useEffect(() => {

        const controller = new AbortController();

        async function carregarProfessores() {

            setCarregando(true);
            setErro("");

            try {

                // Consultar a API de professores
                const resposta = await fetch(
                    "/api/professores",
                    {
                        method: "GET",
                        cache: "no-store",
                        signal: controller.signal
                    }
                );

                if (controller.signal.aborted) return;

                // Verificar autenticação
                if (resposta.status === 401) {
                    router.replace("/login");
                    return;
                }

                const dados = await resposta.json();

                // Verificar possíveis erros
                if (!resposta.ok) {
                    throw new Error(
                        dados.erro ||
                        "Erro ao buscar professores."
                    );
                }

                // Validar o formato da resposta
                if (!Array.isArray(dados)) {
                    throw new Error(
                        "Formato de dados inválido."
                    );
                }

                // Atualizar a lista
                setProfessores(dados);

            } catch (error) {

                if (controller.signal.aborted) return;

                console.error(
                    "Erro ao carregar professores:",
                    error
                );

                setErro(
                    error.message ||
                    "Não foi possível carregar os professores."
                );

            } finally {

                if (!controller.signal.aborted) {
                    setCarregando(false);
                }
            }
        }

        carregarProfessores();

        return () => {
            controller.abort();
        };

    }, [router, tentativa]);


    // ============================================
    // NORMALIZAR TEXTO PARA PESQUISA
    // ============================================

    function normalizarTexto(texto) {
        return String(texto ?? "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }


    // ============================================
    // FILTRAR PROFESSORES
    // ============================================

    const professoresFiltrados = professores.filter(
        (professor) => {

            const termo = normalizarTexto(busca);

            const nome = normalizarTexto(
                professor.nome
            );

            const nif = normalizarTexto(
                professor.nif
            );

            const disciplina = normalizarTexto(
                professor.disciplina_nome
            );

            return (
                nome.includes(termo) ||
                nif.includes(termo) ||
                disciplina.includes(termo)
            );
        }
    );


    // ============================================
    // FORMATAR DIAS DE AULA
    // ============================================

    function formatarDias(dias) {

        if (!Array.isArray(dias) || dias.length === 0) {
            return "Não informado";
        }

        return dias.join(", ");
    }


    // ============================================
    // INTERFACE
    // ============================================

    return (
        <>
            <Header />

            <main className="main">
                <section className="container">

                    {/* Cabeçalho da página */}

                    <div className="cabecalho">

                        <div>
                            <p className="status">
                                SISTEMA ONLINE ● CORPO DOCENTE
                            </p>

                            <h1>
                                Lista de Professores
                            </h1>

                            <p className="descricao">
                                Consulte os professores cadastrados,
                                suas matrículas, disciplinas e
                                horários semanais de aula.
                            </p>
                        </div>

                        <Link
                            href="/cadprofessores"
                            className="botaoNovo"
                        >
                            + Novo Professor
                        </Link>

                    </div>


                    {/* Painel principal */}

                    <div className="painel">

                        <div className="painelTopo">

                            <div>
                                <h2>
                                    Professores Cadastrados
                                </h2>

                                <p>
                                    Gerenciamento do corpo docente
                                    da instituição.
                                </p>
                            </div>

                            <div className="contador">
                                {professores.length}
                                {" "}
                                {professores.length === 1
                                    ? "professor"
                                    : "professores"}
                            </div>

                        </div>


                        {/* Pesquisa */}

                        <div className="filtros">

                            <label
                                htmlFor="busca"
                                className="labelBusca"
                            >
                                Pesquisar Professor
                            </label>

                            <input
                                id="busca"
                                type="search"
                                placeholder="Pesquise por nome, NIF ou disciplina..."
                                value={busca}
                                onChange={(e) =>
                                    setBusca(e.target.value)
                                }
                            />

                        </div>


                        {/* Carregamento */}

                        {carregando && (
                            <div
                                className="mensagem"
                                role="status"
                            >
                                Carregando professores...
                            </div>
                        )}


                        {/* Tratamento de erros */}

                        {!carregando && erro && (
                            <div
                                className="mensagem erro"
                                role="alert"
                            >
                                <p>{erro}</p>

                                <button
                                    type="button"
                                    className="botaoTentar"
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


                        {/* Listagem */}

                        {!carregando && !erro && (
                            <>
                                {professoresFiltrados.length > 0 ? (

                                    <div className="tabelaContainer">

                                        <table className="tabela">

                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        ID
                                                    </th>

                                                    <th scope="col">
                                                        Professor
                                                    </th>

                                                    <th scope="col">
                                                        NIF
                                                    </th>

                                                    <th scope="col">
                                                        Disciplina
                                                    </th>

                                                    <th scope="col">
                                                        Dias de Aula
                                                    </th>

                                                    <th scope="col">
                                                        Aulas/Semana
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {professoresFiltrados.map(
                                                    (professor) => (

                                                        <tr
                                                            key={
                                                                professor.id_professor
                                                            }
                                                        >

                                                            {/* ID */}

                                                            <td className="id">
                                                                {
                                                                    professor.id_professor
                                                                }
                                                            </td>


                                                            {/* Nome */}

                                                            <td className="nome">
                                                                {
                                                                    professor.nome
                                                                }
                                                            </td>


                                                            {/* NIF */}

                                                            <td>
                                                                {
                                                                    professor.nif
                                                                }
                                                            </td>


                                                            {/* Disciplina FK */}

                                                            <td>
                                                                <span className="disciplina">
                                                                    {
                                                                        professor.disciplina_nome
                                                                    }
                                                                </span>
                                                            </td>


                                                            {/* Dias da semana */}

                                                            <td className="dias">
                                                                {formatarDias(
                                                                    professor.dias_aula
                                                                )}
                                                            </td>


                                                            {/* Total de aulas */}

                                                            <td>
                                                                <span className="total">
                                                                    {
                                                                        professor.total_aulas_semana
                                                                    }
                                                                </span>
                                                            </td>

                                                        </tr>

                                                    )
                                                )}

                                            </tbody>

                                        </table>

                                    </div>

                                ) : (

                                    <div className="mensagem">

                                        {busca.trim()
                                            ? "Nenhum professor encontrado para esta pesquisa."
                                            : "Nenhum professor cadastrado."}

                                    </div>

                                )}
                            </>
                        )}

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

                /* CABEÇALHO */

                .cabecalho {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 30px;
                    margin-bottom: 55px;
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
                    color: #202020;
                    font-size: clamp(42px, 5vw, 65px);
                    font-weight: 750;
                    line-height: 1.02;
                    letter-spacing: -0.05em;
                }

                h1::after {
                    content: ".";
                    color: #e30613;
                }

                .descricao {
                    max-width: 650px;
                    margin-top: 25px;
                    color: #696969;
                    font-size: 15px;
                    line-height: 1.75;
                }

                .botaoNovo {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 51px;
                    padding: 0 25px;
                    background: #e30613;
                    border: 1px solid #e30613;
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    white-space: nowrap;
                    transition:
                        background 0.2s ease,
                        transform 0.2s ease;
                }

                .botaoNovo:hover {
                    background: #b90610;
                    transform: translateY(-2px);
                }

                /* PAINEL */

                .painel {
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                }

                .painelTopo {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 35px 40px;
                    border-bottom: 1px solid #eeeeee;
                }

                .painelTopo h2 {
                    color: #202020;
                    font-size: 23px;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                }

                .painelTopo p {
                    margin-top: 9px;
                    color: #777777;
                    font-size: 13px;
                    line-height: 1.5;
                }

                .contador {
                    padding: 10px 15px;
                    background: #f6f6f6;
                    color: #555555;
                    font-size: 12px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                /* PESQUISA */

                .filtros {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 25px 40px;
                }

                .labelBusca {
                    color: #333333;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                }

                .filtros input {
                    width: 100%;
                    max-width: 500px;
                    height: 49px;
                    padding: 0 15px;
                    background: #fafafa;
                    border: 1px solid #dddddd;
                    border-radius: 0;
                    outline: none;
                    color: #202020;
                    font-family: inherit;
                    font-size: 14px;
                }

                .filtros input:focus {
                    background: #ffffff;
                    border-color: #e30613;
                    box-shadow:
                        0 0 0 3px rgba(227, 6, 19, 0.07);
                }

                /* TABELA */

                .tabelaContainer {
                    width: 100%;
                    overflow-x: auto;
                }

                .tabela {
                    width: 100%;
                    min-width: 1000px;
                    border-collapse: collapse;
                    text-align: left;
                }

                .tabela thead {
                    background: #f7f7f7;
                }

                .tabela th {
                    padding: 20px;
                    border-bottom: 1px solid #e5e5e5;
                    color: #555555;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    white-space: nowrap;
                }

                .tabela td {
                    padding: 22px 20px;
                    border-bottom: 1px solid #eeeeee;
                    color: #333333;
                    font-size: 13px;
                    line-height: 1.6;
                    vertical-align: middle;
                }

                .tabela tbody tr:hover {
                    background: #fafafa;
                }

                .tabela tbody tr:last-child td {
                    border-bottom: none;
                }

                .id {
                    color: #777777 !important;
                    font-weight: 600;
                }

                .nome {
                    color: #202020 !important;
                    font-weight: 700;
                    min-width: 180px;
                }

                .disciplina {
                    display: inline-block;
                    padding: 8px 12px;
                    background: #fff1f2;
                    color: #b90610;
                    font-size: 12px;
                    font-weight: 700;
                }

                .dias {
                    max-width: 280px;
                    color: #555555 !important;
                }

                .total {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 38px;
                    height: 38px;
                    padding: 0 10px;
                    background: #f2f2f2;
                    color: #303030;
                    font-size: 13px;
                    font-weight: 800;
                }

                /* MENSAGENS */

                .mensagem {
                    padding: 45px 25px;
                    color: #777777;
                    font-size: 14px;
                    text-align: center;
                }

                .erro {
                    color: #b42318;
                    background: #fff1f2;
                }

                .botaoTentar {
                    margin-top: 18px;
                    padding: 12px 18px;
                    background: #e30613;
                    border: none;
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }

                /* RESPONSIVIDADE */

                @media (max-width: 900px) {

                    .cabecalho {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .painelTopo {
                        padding: 30px 25px;
                    }

                    .filtros {
                        padding: 25px;
                    }
                }

                @media (max-width: 600px) {

                    .main {
                        padding: 60px 15px 75px;
                    }

                    h1 {
                        font-size: 40px;
                    }

                    .botaoNovo {
                        width: 100%;
                    }

                    .painelTopo {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .tabela th,
                    .tabela td {
                        padding: 16px;
                    }
                }

            `}</style>
        </>
    );
}
