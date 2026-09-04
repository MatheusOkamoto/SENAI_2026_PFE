'use client';

import Header from '../components/header';

export default function ListNotas() {

    const registro = {
        nomeAluno: 'Ana Luíza',
        t1: 8.5,
        t2: 9.0,
        n1: 7.5,
        n2: 8.0,
        n3: 9.5
    };

    const media =
        (
            registro.t1 +
            registro.t2 +
            registro.n1 +
            registro.n2 +
            registro.n3
        ) / 5;

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
                                    NOTAS
                                </span>

                                <h1>
                                    Lista de
                                    <span> notas.</span>
                                </h1>

                                <p>
                                    Consulte as notas e o desempenho
                                    dos alunos cadastrados no sistema escolar.
                                </p>
                            </div>

                        </div>


                        {/* TABELA */}
                        <div className="tabelaArea">

                            <div className="tabelaHeader">

                                <div>
                                    <span>REGISTROS</span>
                                    <h2>Notas cadastradas</h2>
                                </div>

                                <span className="tabelaQuantidade">
                                    01 REGISTRO
                                </span>

                            </div>


                            <div className="tabelaResponsiva">

                                <table className="tabelaSistema">

                                    <thead>
                                        <tr>
                                            <th>Nome aluno</th>
                                            <th>Trabalho 1</th>
                                            <th>Trabalho 2</th>
                                            <th>Nota 1</th>
                                            <th>Nota 2</th>
                                            <th>Nota 3</th>
                                            <th>Média</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr>

                                            <td>
                                                <strong>
                                                    {registro.nomeAluno}
                                                </strong>
                                            </td>

                                            <td>
                                                {registro.t1.toFixed(1)}
                                            </td>

                                            <td>
                                                {registro.t2.toFixed(1)}
                                            </td>

                                            <td>
                                                {registro.n1.toFixed(1)}
                                            </td>

                                            <td>
                                                {registro.n2.toFixed(1)}
                                            </td>

                                            <td>
                                                {registro.n3.toFixed(1)}
                                            </td>

                                            <td>
                                                <strong className="mediaNota">
                                                    {media.toFixed(1)}
                                                </strong>
                                            </td>

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