
'use client';

import { useCallback, useEffect, useState } from 'react';
import Header from '../components/header';

const camposNotas = ['t1', 't2', 'n1', 'n2', 'n3'];

export default function ListNotas() {

    const [registros, setRegistros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    const [editandoId, setEditandoId] = useState(null);
    const [valoresEdicao, setValoresEdicao] = useState({});
    const [processando, setProcessando] = useState(false);

    const carregarNotas = useCallback(async () => {
        try {
            setErro('');

            const resposta = await fetch('/api/notas', {
                cache: 'no-store'
            });

            if (!resposta.ok) {
                throw new Error('Não foi possível carregar as notas.');
            }

            const dados = await resposta.json();
            setRegistros(dados);

        } catch (error) {
            setErro(error.message);
        } finally {
            setCarregando(false);
        }
    }, []);

    useEffect(() => {
        carregarNotas();
    }, [carregarNotas]);

    function calcularMedia(registro) {

        const soma = camposNotas.reduce(
            (total, campo) =>
                total + Number(registro[campo]),
            0
        );

        return (soma / camposNotas.length).toFixed(1);
    }

    function iniciarEdicao(registro) {

        setEditandoId(registro.id_notas);

        setValoresEdicao({
            t1: String(registro.t1),
            t2: String(registro.t2),
            n1: String(registro.n1),
            n2: String(registro.n2),
            n3: String(registro.n3)
        });

        setErro('');
    }

    function cancelarEdicao() {
        setEditandoId(null);
        setValoresEdicao({});
        setErro('');
    }

    async function salvarEdicao(registro) {

        const valores = camposNotas.map(
            campo => valoresEdicao[campo]
        );

        const notas = valores.map(Number);

        if (
            valores.some(valor => valor.trim() === '') ||
            notas.some(nota =>
                !Number.isFinite(nota) ||
                nota < 0 ||
                nota > 10
            )
        ) {
            setErro('Informe notas válidas entre 0 e 10.');
            return;
        }

        setProcessando(true);
        setErro('');

        try {
            const resposta = await fetch('/api/notas', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_notas: registro.id_notas,
                    aluno_id: registro.aluno_id,
                    t1: notas[0],
                    t2: notas[1],
                    n1: notas[2],
                    n2: notas[3],
                    n3: notas[4]
                })
            });

            if (!resposta.ok) {
                throw new Error('Não foi possível editar as notas.');
            }

            cancelarEdicao();
            await carregarNotas();

        } catch (error) {
            setErro(error.message);
        } finally {
            setProcessando(false);
        }
    }

    async function excluirNotas(registro) {

        const confirmar = window.confirm(
            `Deseja realmente excluir as notas de ${registro.nome}?`
        );

        if (!confirmar) return;

        setProcessando(true);
        setErro('');

        try {
            const resposta = await fetch('/api/notas', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_notas: registro.id_notas
                })
            });

            if (!resposta.ok) {
                throw new Error('Não foi possível excluir as notas.');
            }

            if (editandoId === registro.id_notas) {
                cancelarEdicao();
            }

            await carregarNotas();

        } catch (error) {
            setErro(error.message);
        } finally {
            setProcessando(false);
        }
    }

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
                                    {String(registros.length).padStart(2, '0')}
                                    {' '}
                                    {registros.length === 1
                                        ? 'REGISTRO'
                                        : 'REGISTROS'}
                                </span>

                            </div>

                            {erro && (
                                <p
                                    role="alert"
                                    style={{
                                        color: '#dc2626',
                                        padding: '16px'
                                    }}
                                >
                                    {erro}
                                </p>
                            )}

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

                                        {carregando ? (

                                            <tr>
                                                <td colSpan={8}>
                                                    Carregando notas...
                                                </td>
                                            </tr>

                                        ) : registros.length === 0 ? (

                                            <tr>
                                                <td colSpan={8}>
                                                    Nenhuma nota cadastrada.
                                                </td>
                                            </tr>

                                        ) : (

                                            registros.map((registro) => {

                                                const editando =
                                                    editandoId === registro.id_notas;

                                                return (
                                                    <tr key={registro.id_notas}>

                                                        <td>
                                                            <strong>
                                                                {registro.nome}
                                                            </strong>
                                                        </td>

                                                        {camposNotas.map((campo) => (

                                                            <td key={campo}>

                                                                {editando ? (

                                                                    <input
                                                                        type="number"
                                                                        min="0"
                                                                        max="10"
                                                                        step="0.1"
                                                                        value={
                                                                            valoresEdicao[campo]
                                                                        }
                                                                        onChange={(e) =>
                                                                            setValoresEdicao(
                                                                                anterior => ({
                                                                                    ...anterior,
                                                                                    [campo]: e.target.value
                                                                                })
                                                                            )
                                                                        }
                                                                        aria-label={`Editar ${campo}`}
                                                                        style={{
                                                                            width: '75px',
                                                                            padding: '8px',
                                                                            borderRadius: '6px',
                                                                            border: '1px solid #ccc',
                                                                            font: 'inherit'
                                                                        }}
                                                                    />

                                                                ) : (

                                                                    Number(
                                                                        registro[campo]
                                                                    ).toFixed(1)

                                                                )}

                                                            </td>

                                                        ))}

                                                        <td>
                                                            <strong className="mediaNota">
                                                                {editando
                                                                    ? '—'
                                                                    : calcularMedia(registro)}
                                                            </strong>
                                                        </td>

                                                        <td>

                                                            <div className="acoesTabela">

                                                                {editando ? (

                                                                    <>
                                                                        <button
                                                                            className="botaoEditar"
                                                                            type="button"
                                                                            disabled={processando}
                                                                            onClick={() =>
                                                                                salvarEdicao(registro)
                                                                            }
                                                                        >
                                                                            {processando
                                                                                ? 'Salvando...'
                                                                                : 'Salvar'}
                                                                        </button>

                                                                        <button
                                                                            className="botaoExcluir"
                                                                            type="button"
                                                                            disabled={processando}
                                                                            onClick={cancelarEdicao}
                                                                        >
                                                                            Cancelar
                                                                        </button>
                                                                    </>

                                                                ) : (

                                                                    <>
                                                                        <button
                                                                            className="botaoEditar"
                                                                            type="button"
                                                                            disabled={processando}
                                                                            onClick={() =>
                                                                                iniciarEdicao(registro)
                                                                            }
                                                                        >
                                                                            Editar
                                                                        </button>

                                                                        <button
                                                                            className="botaoExcluir"
                                                                            type="button"
                                                                            disabled={processando}
                                                                            onClick={() =>
                                                                                excluirNotas(registro)
                                                                            }
                                                                        >
                                                                            Excluir
                                                                        </button>
                                                                    </>

                                                                )}

                                                            </div>

                                                        </td>

                                                    </tr>
                                                );
                                            })

                                        )}

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
