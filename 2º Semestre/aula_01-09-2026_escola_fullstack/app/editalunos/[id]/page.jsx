
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/header";
import styles from "./cadaluno.module.css";

export default function EditarAlunoPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (!id) return;

        let ativo = true;

        async function buscarAluno() {
            try {
                const resposta = await fetch(`/api/alunos/${id}`);

                if (!resposta.ok) {
                    throw new Error("Aluno não encontrado.");
                }

                const dados = await resposta.json();

                if (ativo) {
                    setNome(dados.nome ?? "");
                    setIdade(dados.idade ?? "");
                    setSerie(dados.serie ?? "");
                    setRa(dados.ra ?? "");
                }

            } catch (error) {
                console.error("Erro ao buscar aluno:", error);

                if (ativo) {
                    setErro("Não foi possível carregar o aluno.");
                }

            } finally {
                if (ativo) {
                    setCarregando(false);
                }
            }
        }

        buscarAluno();

        return () => {
            ativo = false;
        };
    }, [id]);

    async function salvarAluno(event) {
        event.preventDefault();
        setSalvando(true);

        try {
            const resposta = await fetch("/api/alunos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_aluno: Number(id),
                    nome,
                    idade,
                    serie,
                    ra
                })
            });

            const dados = await resposta.json();

            alert(dados.mensagem || dados.erro);

            if (resposta.ok) {
                router.push("/listalunos");
            }

        } catch (error) {
            console.error("Erro ao editar aluno:", error);
            alert("Não foi possível salvar as alterações.");

        } finally {
            setSalvando(false);
        }
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.painel}>

                        <p className={styles.status}>
                            SISTEMA ONLINE ● EDIÇÃO DE ESTUDANTES
                        </p>

                        <h2>Editar Aluno</h2>

                        {carregando ? (
                            <div className={styles.form}>
                                <p>Carregando informações do aluno...</p>
                            </div>
                        ) : erro ? (
                            <div className={styles.form}>
                                <p>{erro}</p>
                            </div>
                        ) : (
                            <form
                                className={styles.form}
                                onSubmit={salvarAluno}
                            >
                                <div className={styles.campo}>
                                    <label htmlFor="nome">
                                        Nome Completo
                                    </label>

                                    <input
                                        id="nome"
                                        type="text"
                                        value={nome}
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="idade">
                                        Idade
                                    </label>

                                    <input
                                        id="idade"
                                        type="number"
                                        min="1"
                                        value={idade}
                                        onChange={(e) =>
                                            setIdade(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="serie">
                                        Série
                                    </label>

                                    <input
                                        id="serie"
                                        type="text"
                                        value={serie}
                                        onChange={(e) =>
                                            setSerie(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="ra">
                                        RA
                                    </label>

                                    <input
                                        id="ra"
                                        type="text"
                                        value={ra}
                                        onChange={(e) =>
                                            setRa(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <button
                                    className={styles.botao}
                                    type="submit"
                                    disabled={salvando}
                                >
                                    {salvando
                                        ? "Salvando..."
                                        : "Salvar Alterações"}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className={styles.voltar}>
                        <Link href="/listalunos">
                            ← Voltar para Lista de Alunos
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
