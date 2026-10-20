
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import styles from "./cadnotas.module.css";

export default function CadNotas() {
    const router = useRouter();

    const [aluno_id, setAlunoId] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [salvando, setSalvando] = useState(false);

    useEffect(() => {
        buscarAlunos();
    }, []);

    async function buscarAlunos() {
        try {
            const resposta = await fetch("/api/alunos");

            if (!resposta.ok) {
                throw new Error("Erro ao buscar alunos.");
            }

            const dados = await resposta.json();
            setAlunos(dados);

        } catch (error) {
            console.error("Erro ao buscar alunos", error);
            alert("Não foi possível carregar os alunos.");
        }
    }

    async function cadastraNotas(event) {
        event.preventDefault();
        setSalvando(true);

        try {
            const resposta = await fetch("/api/notas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    aluno_id,
                    t1,
                    t2,
                    n1,
                    n2,
                    n3
                })
            });

            const dados = await resposta.json();

            alert(dados.mensagem || dados.erro);

            if (resposta.ok) {
                router.push("/listnotas");
            }

        } catch (error) {
            console.error("Erro ao cadastrar notas", error);
            alert("Não foi possível salvar as notas.");

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
                            SISTEMA ONLINE ● CADASTRO DE NOTAS
                        </p>

                        <h2>Cadastro de Notas</h2>

                        <form
                            className={styles.form}
                            onSubmit={cadastraNotas}
                        >
                            <div className={styles.campo}>
                                <label htmlFor="aluno_id">
                                    Aluno
                                </label>

                                <select
                                    id="aluno_id"
                                    value={aluno_id}
                                    onChange={(event) =>
                                        setAlunoId(event.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Selecione um aluno
                                    </option>

                                    {alunos.map((aluno) => (
                                        <option
                                            key={aluno.id_aluno}
                                            value={aluno.id_aluno}
                                        >
                                            {aluno.nome} - RA {aluno.ra}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="trabalho1">
                                    Trabalho 1
                                </label>

                                <input
                                    id="trabalho1"
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
                                <label htmlFor="trabalho2">
                                    Trabalho 2
                                </label>

                                <input
                                    id="trabalho2"
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
                                <label htmlFor="nota1">
                                    Nota 1
                                </label>

                                <input
                                    id="nota1"
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
                                <label htmlFor="nota2">
                                    Nota 2
                                </label>

                                <input
                                    id="nota2"
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
                                <label htmlFor="nota3">
                                    Nota 3
                                </label>

                                <input
                                    id="nota3"
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

                            <button
                                type="submit"
                                className={styles.botao}
                                disabled={salvando}
                            >
                                {salvando ? "Salvando..." : "Salvar Nota"}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
