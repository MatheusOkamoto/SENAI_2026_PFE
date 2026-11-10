
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";

export default function CadDisciplinas() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [pontuacaoMinima, setPontuacaoMinima] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    // ============================================
    // CADASTRAR DISCIPLINA
    // ============================================

    async function cadastrarDisciplina(evento) {
        evento.preventDefault();

        setErro("");

        const nomeFormatado = nome.trim();
        const pontuacao = Number(pontuacaoMinima);

        // Validar os campos
        if (
            nomeFormatado.length < 2 ||
            nomeFormatado.length > 100
        ) {
            setErro("Informe um nome entre 2 e 100 caracteres.");
            return;
        }

        if (
            pontuacaoMinima === "" ||
            !Number.isFinite(pontuacao) ||
            pontuacao < 0 ||
            pontuacao > 100
        ) {
            setErro("Informe uma pontuação entre 0 e 100.");
            return;
        }

        setCarregando(true);

        try {
            // Enviar dados para a API
            const resposta = await fetch("/api/disciplinas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nomeFormatado,
                    pontuacao_minima: pontuacao
                })
            });

            const dados = await resposta.json();

            // Verificar se ocorreu algum erro
            if (!resposta.ok) {
                setErro(
                    dados.erro ||
                    "Não foi possível cadastrar a disciplina."
                );
                return;
            }

            // Redirecionar para a listagem
            router.push("/listdisciplinas");
            router.refresh();

        } catch (error) {
            console.error("Erro ao cadastrar disciplina:", error);

            setErro(
                "Não foi possível conectar ao servidor."
            );

        } finally {
            setCarregando(false);
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

                        <div className="apresentacao">
                            <p className="status">
                                SISTEMA ONLINE ● CADASTRO ACADÊMICO
                            </p>

                            <h1>
                                Cadastro de Disciplinas
                            </h1>

                            <p className="descricao">
                                Cadastre as disciplinas oferecidas
                                pela instituição e defina a pontuação
                                mínima necessária para aprovação.
                            </p>

                            <Link
                                href="/listdisciplinas"
                                className="linkLista"
                            >
                                Consultar disciplinas cadastradas →
                            </Link>
                        </div>

                        <form
                            className="formulario"
                            onSubmit={cadastrarDisciplina}
                        >
                            <h2>Dados da Disciplina</h2>

                            <div className="campo">
                                <label htmlFor="nome">
                                    Nome da Disciplina
                                </label>

                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Ex.: Matemática"
                                    value={nome}
                                    onChange={(e) =>
                                        setNome(e.target.value)
                                    }
                                    minLength={2}
                                    maxLength={100}
                                    required
                                />
                            </div>

                            <div className="campo">
                                <label htmlFor="pontuacao">
                                    Pontuação Mínima para Aprovação
                                </label>

                                <input
                                    id="pontuacao"
                                    name="pontuacao"
                                    type="number"
                                    placeholder="Ex.: 60"
                                    min="0"
                                    max="100"
                                    step="0.01"
                                    value={pontuacaoMinima}
                                    onChange={(e) =>
                                        setPontuacaoMinima(e.target.value)
                                    }
                                    required
                                />

                                <small>
                                    Informe um valor entre 0 e 100 pontos.
                                </small>
                            </div>

                            {erro && (
                                <p className="erro" role="alert">
                                    {erro}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="botao"
                                disabled={carregando}
                            >
                                {carregando
                                    ? "Salvando..."
                                    : "Salvar Disciplina"}
                            </button>
                        </form>

                    </div>
                </section>
            </main>

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

                .formulario {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
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

                .campo {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                }

                .campo label {
                    color: #333333;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                }

                .campo input {
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

                .campo input:hover {
                    border-color: #bfbfbf;
                }

                .campo input:focus {
                    background: #ffffff;
                    border-color: #e30613;
                    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.07);
                }

                .campo small {
                    color: #777777;
                    font-size: 12px;
                }

                .erro {
                    padding: 14px 16px;
                    color: #b42318;
                    background: #fff1f2;
                    border-left: 3px solid #e30613;
                    font-size: 13px;
                }

                .botao {
                    min-height: 51px;
                    margin-top: 10px;
                    padding: 0 25px;
                    align-self: flex-end;
                    background: #e30613;
                    border: 1px solid #e30613;
                    color: #ffffff;
                    font-family: inherit;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition:
                        background 0.2s ease,
                        transform 0.2s ease;
                }

                .botao:hover:not(:disabled) {
                    background: #b90610;
                    transform: translateY(-2px);
                }

                .botao:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

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

                    .botao {
                        width: 100%;
                        align-self: stretch;
                    }
                }
            `}</style>
        </>
    );
}
