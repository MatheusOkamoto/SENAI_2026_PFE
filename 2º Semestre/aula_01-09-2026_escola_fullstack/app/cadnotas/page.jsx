
'use client';

import { useEffect, useState } from 'react';
import Header from '../components/header';

export default function CadNotas() {

    const [alunos, setAlunos] = useState([]);
    const [alunoId, setAlunoId] = useState('');

    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {

        async function carregarAlunos() {
            try {
                const resposta = await fetch('/api/alunos', {
                    cache: 'no-store'
                });

                if (!resposta.ok) {
                    throw new Error('Erro ao carregar alunos.');
                }

                const dados = await resposta.json();
                setAlunos(dados);

            } catch (error) {
                setErro(error.message);
            } finally {
                setCarregando(false);
            }
        }

        carregarAlunos();

    }, []);

    async function salvarNota(e) {
        e.preventDefault();

        setMensagem('');
        setErro('');

        const campos = [t1, t2, n1, n2, n3];
        const notas = campos.map(Number);

        if (
            !alunoId ||
            campos.some(valor => valor.trim() === '') ||
            notas.some(nota =>
                !Number.isFinite(nota) ||
                nota < 0 ||
                nota > 10
            )
        ) {
            setErro('Selecione um aluno e informe notas de 0 a 10.');
            return;
        }

        setSalvando(true);

        try {
            const resposta = await fetch('/api/notas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    aluno_id: Number(alunoId),
                    t1: notas[0],
                    t2: notas[1],
                    n1: notas[2],
                    n2: notas[3],
                    n3: notas[4]
                })
            });

            if (!resposta.ok) {
                throw new Error('Não foi possível salvar as notas.');
            }

            setMensagem('Notas cadastradas com sucesso!');

            setAlunoId('');
            setT1('');
            setT2('');
            setN1('');
            setN2('');
            setN3('');

        } catch (error) {
            setErro(error.message);
        } finally {
            setSalvando(false);
        }
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
                                        Selecione um aluno cadastrado
                                        e informe todas as notas
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

                                {/* SELECIONAR ALUNO */}
                                <div className="formGroup formGroupFull">

                                    <label htmlFor="alunoId">
                                        Nome do aluno
                                    </label>

                                    <select
                                        id="alunoId"
                                        value={alunoId}
                                        onChange={(e) =>
                                            setAlunoId(e.target.value)
                                        }
                                        disabled={carregando}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px',
                                            borderRadius: '8px',
                                            border: '1px solid #ccc',
                                            backgroundColor: 'transparent',
                                            color: 'inherit',
                                            font: 'inherit'
                                        }}
                                    >
                                        <option value="">
                                            {carregando
                                                ? 'Carregando alunos...'
                                                : 'Selecione um aluno'}
                                        </option>

                                        {alunos.map((aluno) => (
                                            <option
                                                key={aluno.id_aluno}
                                                value={aluno.id_aluno}
                                                style={{ color: '#111' }}
                                            >
                                                {aluno.nome} — RA: {aluno.ra}
                                            </option>
                                        ))}
                                    </select>

                                    {!carregando && alunos.length === 0 && (
                                        <p>
                                            Nenhum aluno cadastrado.
                                            Cadastre um aluno primeiro.
                                        </p>
                                    )}

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

                                {/* MENSAGENS E BOTÃO */}
                                <div className="formActions">

                                    <span
                                        role={erro ? 'alert' : 'status'}
                                        style={{
                                            color: erro
                                                ? '#dc2626'
                                                : mensagem
                                                    ? '#16a34a'
                                                    : 'inherit'
                                        }}
                                    >
                                        {erro ||
                                            mensagem ||
                                            'Verifique as notas antes de salvar.'}
                                    </span>

                                    <button
                                        type="submit"
                                        disabled={
                                            salvando ||
                                            carregando ||
                                            alunos.length === 0
                                        }
                                    >
                                        {salvando
                                            ? 'Salvando...'
                                            : 'Salvar notas'}

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
