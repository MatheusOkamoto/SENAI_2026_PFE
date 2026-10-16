'use client';

import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from "./listanotas.module.css";

export default function ListNotas() {
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        buscarNotas();
    }, []);

    async function buscarNotas() {
        const resposta = await fetch('/api/notas');
        const dados = await resposta.json();

        setNotas(dados);
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
                            {notas.length > 0 ? (
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
                                                className={styles.botaoEditar}
                                                type="button"
                                                disabled
                                            >
                                                Editar
                                            </button>

                                            <button
                                                className={styles.botaoExcluir}
                                                type="button"
                                                disabled
                                            >
                                                Excluir
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