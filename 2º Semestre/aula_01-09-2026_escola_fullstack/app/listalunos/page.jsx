'use client';

import Header from '../components/header';

export default function ListAlunos() {

    return (
        <>
            <Header />

            <main className="listaPage">

                <section className="listaSection">

                    <div className="container">

                        {/* CABEÇALHO */}
                        <div className="listaHeader">

                            <div>
                                <span className="sectionLabel">
                                    ALUNOS
                                </span>

                                <h1>
                                    Lista de
                                    <span> alunos.</span>
                                </h1>

                                <p>
                                    Consulte os estudantes cadastrados
                                    no sistema escolar.
                                </p>
                            </div>

                        </div>


                        {/* TABELA */}
                        <div className="tabelaArea">

                            <div className="tabelaHeader">

                                <div>
                                    <span>REGISTROS</span>
                                    <h2>Alunos cadastrados</h2>
                                </div>

                                <span className="tabelaQuantidade">
                                    01 REGISTRO
                                </span>

                            </div>


                            <div className="tabelaResponsiva">

                                <table className="tabelaSistema">

                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Idade</th>
                                            <th>Série</th>
                                            <th>RA</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td>01</td>

                                            <td>
                                                <strong>Ana Luíza</strong>
                                            </td>

                                            <td>17</td>
                                            <td>3B</td>
                                            <td>909030</td>

                                            <td>
                                                <div className="acoesTabela">

                                                    <button
                                                        className="botaoEditar"
                                                        type="button"
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="botaoExcluir"
                                                        type="button"
                                                    >
                                                        Excluir
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
}