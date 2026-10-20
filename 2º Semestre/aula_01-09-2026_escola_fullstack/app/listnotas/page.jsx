
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import styles from "./listanotas.module.css";

export default function ListNotas() {
    const [notas, setNotas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [excluindo, setExcluindo] = useState(null);
    const [erro, setErro] = useState("");

    const router = useRouter();

    useEffect(() => {
        buscarNotas();
    }, []);

    async function buscarNotas() {
        setCarregando(true);

        try {
            const resposta = await fetch("/api/notas");

            if (!resposta.ok) {
                throw new Error("Erro ao buscar notas.");
            }

            const dados = await resposta.json();
            setNotas(dados);
            setErro("");

        } catch (error) {
            console.error("Erro ao buscar notas:", error);
            setErro("Não foi possível carregar as notas.");

        } finally {
            setCarregando(false);
        }
    }

    function editarNotas(id) {
        router.push(`/editnotas/${id}`);
    }

    async function excluirNotas(id) {
        if (!confirm("Deseja realmente excluir estas notas?")) {
            return;
        }

        setExcluindo(id);

        try {
            const resposta = await fetch("/api/notas", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_notas: id
                })
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                throw new Error(
                    dados.erro || "Erro ao excluir notas."
                );
            }

            alert(dados.mensagem);
            await buscarNotas();

        } catch (error) {
            console.error("Erro ao excluir notas:", error);
            alert(error.message);

        } finally {
            setExcluindo(null);
        }
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.tituloArea}>
                    <h2>Lista de Notas</h2>

                    <p>
                        Consulte todas as notas cadastradas no sistema.
                    </p>
                </section>

                <section className={styles.tabelaContainer}>
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>RA</th>
                                <th>Trabalho 1</th>
                                <th>Trabalho 2</th>
                                <th>Nota 1</th>
                                <th>Nota 2</th>
                                <th>Nota 3</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {carregando ? (
                                <tr>
                                    <td colSpan="9">
                                        Carregando notas...
                                    </td>
                                </tr>
                            ) : erro ? (
                                <tr>
                                    <td colSpan="9">
                                        {erro}
                                    </td>
                                </tr>
                            ) : notas.length > 0 ? (
                                notas.map((nota) => (
                                    <tr key={nota.id_notas}>
                                        <td>{nota.id_notas}</td>
                                        <td>{nota.nome}</td>
                                        <td>{nota.ra}</td>
                                        <td>{nota.t1}</td>
                                        <td>{nota.t2}</td>
                                        <td>{nota.n1}</td>
                                        <td>{nota.n2}</td>
                                        <td>{nota.n3}</td>

                                        <td>
                                            <button
                                                type="button"
                                                className={styles.botaoEditar}
                                                onClick={() =>
                                                    editarNotas(nota.id_notas)
                                                }
                                            >
                                                Editar
                                            </button>

                                            <button
                                                type="button"
                                                className={styles.botaoExcluir}
                                                onClick={() =>
                                                    excluirNotas(nota.id_notas)
                                                }
                                                disabled={excluindo !== null}
                                            >
                                                {excluindo === nota.id_notas
                                                    ? "Excluindo..."
                                                    : "Excluir"}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9">
                                        Nenhuma nota encontrada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}
