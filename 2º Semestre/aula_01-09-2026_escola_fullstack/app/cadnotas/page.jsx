'use client';

import { useState } from 'react';
import Header from '../components/header';

export default function CadNotas() {

    const [nomeAluno, setNomeAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    function salvarNota(e) {
        e.preventDefault();

        console.log({
            nomeAluno,
            t1,
            t2,
            n1,
            n2,
            n3
        });
    }

    return (
        <>
            <Header />

            <main className="cadAlunoPage">
                <section className="cadAlunoSection">

                    <div className="container cadAlunoGrid">

                        {/* LADO ESQUERDO */}
                        <div className="cadAlunoIntro">

                            <span className="sectionLabel">
                                NOTAS
                            </span>

                            <h1>
                                Cadastro de
                                <span> notas.</span>
                            </h1>

                            <p>
                                Preencha as notas do aluno para
                                adicioná-las ao sistema escolar.
                            </p>

                            <div className="cadAlunoInfo">

                                <span>01</span>

                                <div>
                                    <strong>Novo registro</strong>

                                    <p>
                                        Informe o aluno e todas as notas
                                        solicitadas no formulário.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* LADO DIREITO */}
                        <div className="cadAlunoFormArea">

                            <div className="formHeader">

                                <div>
                                    <span>CADASTRO</span>
                                    <h2>Notas do aluno</h2>
                                </div>

                                <span className="formNumber">
                                    01
                                </span>

                            </div>


                            <form
                                className="cadAlunoForm"
                                onSubmit={salvarNota}
                            >

                                {/* NOME DO ALUNO */}
                                <div className="formGroup formGroupFull">

                                    <label htmlFor="nomeAluno">
                                        Nome aluno
                                    </label>

                                    <input
                                        id="nomeAluno"
                                        type="text"
                                        placeholder="Digite o nome do aluno"
                                        value={nomeAluno}
                                        onChange={(e) =>
                                            setNomeAluno(e.target.value)
                                        }
                                        required
                                    />

                                </div>


                                {/* TRABALHO 1 */}
                                <div className="formGroup">

                                    <label htmlFor="t1">
                                        Trabalho 1
                                    </label>

                                    <input
                                        id="t1"
                                        type="number"
                                        placeholder="Digite a nota do trabalho 1"
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


                                {/* TRABALHO 2 */}
                                <div className="formGroup">

                                    <label htmlFor="t2">
                                        Trabalho 2
                                    </label>

                                    <input
                                        id="t2"
                                        type="number"
                                        placeholder="Digite a nota do trabalho 2"
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


                                {/* NOTA 1 */}
                                <div className="formGroup">

                                    <label htmlFor="n1">
                                        Nota 1
                                    </label>

                                    <input
                                        id="n1"
                                        type="number"
                                        placeholder="Digite a nota 1"
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


                                {/* NOTA 2 */}
                                <div className="formGroup">

                                    <label htmlFor="n2">
                                        Nota 2
                                    </label>

                                    <input
                                        id="n2"
                                        type="number"
                                        placeholder="Digite a nota 2"
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


                                {/* NOTA 3 */}
                                <div className="formGroup formGroupFull">

                                    <label htmlFor="n3">
                                        Nota 3
                                    </label>

                                    <input
                                        id="n3"
                                        type="number"
                                        placeholder="Digite a nota 3"
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


                                {/* BOTÃO */}
                                <div className="formActions">

                                    <span>
                                        Verifique as notas antes de salvar.
                                    </span>

                                    <button type="submit">
                                        Salvar notas
                                        <span>→</span>
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </section>
            </main>
        </>
    );
}