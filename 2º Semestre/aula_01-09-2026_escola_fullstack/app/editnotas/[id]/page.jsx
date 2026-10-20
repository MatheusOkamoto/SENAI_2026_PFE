
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/header";
import styles from "./editnotas.module.css";

export default function EditarNotasPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const [nome, setNome] = useState("");
    const [ra, setRa] = useState("");

    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (!id) return;

        let ativo = true;

        async function buscarNota() {
            try {
                const resposta = await fetch(`/api/notas/${id}`);

                const dados = await resposta.json();

                if (!resposta.ok) {
                    throw new Error(
                        dados.erro || "Nota não encontrada."
                    );
                }

                if (ativo) {
                    setNome(dados.nome);
                    setRa(dados.ra);

                    setT1(dados.t1);
                    setT2(dados.t2);
                    setN1(dados.n1);
                    setN2(dados.n2);
                    setN3(dados.n3);
                }

            } catch (error) {
                console.error("Erro ao buscar nota:", error);

                if (ativo) {
                    setErro(error.message);
                }

            } finally {
                if (ativo) {
                    setCarregando(false);
                }
            }
        }

        buscarNota();

        return () => {
            ativo = false;
        };
    }, [id]);

    async function salvarNotas(event) {
        event.preventDefault();
        setSalvando(true);
        setErro("");

        try {
            const resposta = await fetch("/api/notas", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_notas: Number(id),
                    t1,
                    t2,
                    n1,
                    n2,
                    n3
                })
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                throw new Error(
                    dados.erro || "Erro ao atualizar notas."
                );
            }

            alert(dados.mensagem);
            router.push("/listnotas");

        } catch (error) {
            console.error("Erro ao editar notas:", error);
            setErro(error.message);

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
                            SISTEMA ONLINE ● EDIÇÃO DE NOTAS
                        </p>

                        <h2>Editar Notas</h2>

                        {carregando ? (
                            <div className={styles.form}>
                                <p className={styles.aviso}>
                                    Carregando informações...
                                </p>
                            </div>
                        ) : erro && !nome ? (
                            <div className={styles.form}>
                                <p className={styles.erro}>
                                    {erro}
                                </p>
                            </div>
                        ) : (
                            <form
                                className={styles.form}
                                onSubmit={salvarNotas}
                            >
                                <div className={styles.campo}>
                                    <label htmlFor="nome">
                                        Nome do Aluno
                                    </label>

                                    <input
                                        id="nome"
                                        type="text"
                                        value={nome}
                                        readOnly
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
                                        readOnly
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="t1">
                                        Trabalho 1
                                    </label>

                                    <input
                                        id="t1"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={t1}
                                        onChange={(e) =>
                                            setT1(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="t2">
                                        Trabalho 2
                                    </label>

                                    <input
                                        id="t2"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={t2}
                                        onChange={(e) =>
                                            setT2(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="n1">
                                        Nota 1
                                    </label>

                                    <input
                                        id="n1"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={n1}
                                        onChange={(e) =>
                                            setN1(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="n2">
                                        Nota 2
                                    </label>

                                    <input
                                        id="n2"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={n2}
                                        onChange={(e) =>
                                            setN2(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="n3">
                                        Nota 3
                                    </label>

                                    <input
                                        id="n3"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={n3}
                                        onChange={(e) =>
                                            setN3(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {erro && (
                                    <p
                                        className={styles.erro}
                                        role="alert"
                                    >
                                        {erro}
                                    </p>
                                )}

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
                        <Link href="/listnotas">
                            ← Voltar para Lista de Notas
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
