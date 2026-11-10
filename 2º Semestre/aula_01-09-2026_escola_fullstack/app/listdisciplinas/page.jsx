
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";

export default function ListDisciplinas() {

    const router = useRouter();

    const [disciplinas, setDisciplinas] = useState([]);
    const [busca, setBusca] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");
    const [tentativa, setTentativa] = useState(0);


    // ============================================
    // BUSCAR DISCIPLINAS CADASTRADAS
    // ============================================

    useEffect(() => {

        const controller = new AbortController();

        async function carregarDisciplinas() {

            setCarregando(true);
            setErro("");

            try {

                // Consultar a API de disciplinas
                const resposta = await fetch(
                    "/api/disciplinas",
                    {
                        method: "GET",
                        cache: "no-store",
                        signal: controller.signal
                    }
                );

                if (controller.signal.aborted) {
                    return;
                }

                // Verificar autenticação
                if (resposta.status === 401) {
                    router.replace("/login");
                    return;
                }

                const dados = await resposta.json();

                // Verificar se houve erro na requisição
                if (!resposta.ok) {
                    throw new Error(
                        dados.erro ||
                        "Erro ao buscar disciplinas."
                    );
                }

                // Validar os dados recebidos
                if (!Array.isArray(dados)) {
                    throw new Error(
                        "Formato de dados inválido."
                    );
                }

                // Armazenar disciplinas no estado
                setDisciplinas(dados);

            } catch (error) {

                if (controller.signal.aborted) {
                    return;
                }

                console.error(
                    "Erro ao carregar disciplinas:",
                    error
                );

                setErro(
                    error.message ||
                    "Não foi possível carregar as disciplinas."
                );

            } finally {

                if (!controller.signal.aborted) {
                    setCarregando(false);
                }
            }
        }

        carregarDisciplinas();

        return () => {
            controller.abort();
        };

    }, [router, tentativa]);


    // ============================================
    // FILTRAR DISCIPLINAS
    // ============================================

    const disciplinasFiltradas = disciplinas.filter(
        (disciplina) =>
            disciplina.nome
                .toLocaleLowerCase("pt-BR")
                .includes(
                    busca.trim().toLocaleLowerCase("pt-BR")
                )
    );


    // ============================================
    // FORMATAR PONTUAÇÃO
    // ============================================

    function formatarPontuacao(valor) {
        return Number(valor).toLocaleString("pt-BR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
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
                                SISTEMA ONLINE ● GESTÃO ACADÊMICA
                            </p>

                            <h1>
                                Lista de Disciplinas
                            </h1>

                            <p className="descricao">
                                Consulte as disciplinas cadastradas
                                e suas respectivas pontuações
                                mínimas para aprovação.
                            </p>
                        </div>

                        <Link
                            href="/caddisciplinas"
                            className="botaoNovo"
                        >
                            + Nova Disciplina
                        </Link>
                    </div>


                    {/* Área principal */}

                    <div className="painel">

                        <div className="painelTopo">

                            <div>
                                <h2>Disciplinas Cadastradas</h2>

                                <p>
                                    Gerenciamento das disciplinas
                                    da instituição.
                                </p>
                            </div>

                            <div className="contador">
                                {disciplinas.length}
                                {" "}
                                {disciplinas.length === 1
                                    ? "disciplina"
                                    : "disciplinas"}
                            </div>

                        </div>


                        {/* Campo de pesquisa */}

                        <div className="filtros">

                            <label
                                htmlFor="busca"
                                className="labelBusca"
                            >
                                Pesquisar disciplina
                            </label>

                            <input
                                id="busca"
                                type="search"
                                placeholder="Digite o nome da disciplina..."
                                value={busca}
                                onChange={(e) =>
                                    setBusca(e.target.value)
                                }
                            />

                        </div>


                        {/* Mensagem de carregamento */}

                        {carregando && (
                            <div
                                className="mensagem"
                                role="status"
                            >
                                Carregando disciplinas...
                            </div>
                        )}


                        {/* Mensagem de erro */}

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


                        {/* Tabela de disciplinas */}

                        {!carregando && !erro && (
                            <>
                                {disciplinasFiltradas.length > 0 ? (

                                    <div className="tabelaContainer">

                                        <table className="tabela">

                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        ID
                                                    </th>

                                                    <th scope="col">
                                                        Nome da Disciplina
                                                    </th>

                                                    <th scope="col">
                                                        Pontuação Mínima
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {disciplinasFiltradas.map(
                                                    (disciplina) => (

                                                        <tr
                                                            key={
                                                                disciplina.id_disciplina
                                                            }
                                                        >
                                                            <td className="id">
                                                                {
                                                                    disciplina.id_disciplina
                                                                }
                                                            </td>

                                                            <td className="nome">
                                                                {
                                                                    disciplina.nome
                                                                }
                                                            </td>

                                                            <td>
                                                                <span className="pontuacao">
                                                                    {formatarPontuacao(
                                                                        disciplina.pontuacao_minima
                                                                    )}
                                                                    {" pontos"}
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
                                            ? "Nenhuma disciplina encontrada para esta pesquisa."
                                            : "Nenhuma disciplina cadastrada."}

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
                    justify-content: space-between;
                    align-items: center;
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

                /* FILTROS */

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
                    max-width: 450px;
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
                    border-collapse: collapse;
                    text-align: left;
                }

                .tabela thead {
                    background: #f7f7f7;
                }

                .tabela th {
                    padding: 20px 25px;
                    border-bottom: 1px solid #e5e5e5;
                    color: #555555;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                }

                .tabela td {
                    padding: 22px 25px;
                    border-bottom: 1px solid #eeeeee;
                    color: #333333;
                    font-size: 14px;
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
                }

                .pontuacao {
                    display: inline-block;
                    padding: 9px 13px;
                    background: #fff1f2;
                    color: #b90610;
                    font-size: 12px;
                    font-weight: 700;
                    white-space: nowrap;
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

                    .tabela {
                        min-width: 470px;
                    }

                    .tabela th,
                    .tabela td {
                        padding: 17px 15px;
                    }

                }

            `}</style>
        </>
    );
}
