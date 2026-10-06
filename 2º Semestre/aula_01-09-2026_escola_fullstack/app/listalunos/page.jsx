'use client';


import {

    useEffect,

    useState

} from 'react';


import {

    useRouter

} from 'next/navigation';


import Header from '../components/header';



export default function ListAlunos() {


    const router = useRouter();


    const [alunos, setAlunos] =
        useState([]);


    const [carregando, setCarregando] =
        useState(true);



    async function carregarAlunos() {


        try {


            const resposta =
                await fetch(

                    '/api/alunos',

                    {

                        cache: 'no-store'

                    }

                );



            if (!resposta.ok) {

                throw new Error(
                    'Erro ao carregar alunos.'
                );

            }



            const dados =
                await resposta.json();



            setAlunos(dados);



        } catch (error) {


            console.error(

                'Erro ao carregar alunos:',

                error

            );


            alert(

                'Não foi possível carregar os alunos.'

            );


        } finally {


            setCarregando(false);


        }


    }



    useEffect(() => {


        carregarAlunos();


    }, []);



    function editarAluno(id) {


        router.push(

            `/editalunos/${id}`

        );


    }



    async function excluirAluno(id) {


        const confirmar = confirm(

            'Deseja realmente excluir este aluno?'

        );


        if (!confirmar) {

            return;

        }



        try {


            const resposta =
                await fetch(

                    '/api/alunos',

                    {

                        method:
                            'DELETE',


                        headers: {

                            'Content-Type':
                                'application/json'

                        },


                        body:
                            JSON.stringify({

                                id_aluno:
                                    id

                            })

                    }

                );



            const dados =
                await resposta.json();



            if (!resposta.ok) {

                throw new Error(
                    dados.message
                );

            }



            alert(
                'Aluno excluído com sucesso!'
            );


            carregarAlunos();



        } catch (error) {


            console.error(

                'Erro ao excluir aluno:',

                error

            );


            alert(

                error.message ||

                'Não foi possível excluir o aluno.'

            );


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

                                    ALUNOS

                                </span>


                                <h1>

                                    Lista de

                                    <span>
                                        {' '}alunos.
                                    </span>

                                </h1>


                                <p>

                                    Consulte os estudantes
                                    cadastrados no sistema escolar.

                                </p>


                            </div>


                        </div>



                        {/* TABELA */}

                        <div className="tabelaArea">


                            <div className="tabelaHeader">


                                <div>


                                    <span>

                                        REGISTROS

                                    </span>


                                    <h2>

                                        Alunos cadastrados

                                    </h2>


                                </div>



                                <span className="tabelaQuantidade">


                                    {alunos.length}


                                    {
                                        alunos.length === 1

                                            ? ' REGISTRO'

                                            : ' REGISTROS'
                                    }


                                </span>


                            </div>



                            <div className="tabelaResponsiva">


                                <table className="tabelaSistema">


                                    <thead>


                                        <tr>


                                            <th>
                                                ID
                                            </th>


                                            <th>
                                                Nome
                                            </th>


                                            <th>
                                                Idade
                                            </th>


                                            <th>
                                                Série
                                            </th>


                                            <th>
                                                RA
                                            </th>


                                            <th>
                                                Ações
                                            </th>


                                        </tr>


                                    </thead>



                                    <tbody>


                                        {
                                            carregando
                                                ? (

                                                    <tr>


                                                        <td colSpan="6">

                                                            Carregando...

                                                        </td>


                                                    </tr>

                                                )

                                                : alunos.length === 0
                                                    ? (

                                                        <tr>


                                                            <td colSpan="6">

                                                                Nenhum aluno cadastrado.

                                                            </td>


                                                        </tr>

                                                    )

                                                    : (

                                                        alunos.map(

                                                            (aluno) => (

                                                                <tr

                                                                    key={
                                                                        aluno.id_aluno
                                                                    }

                                                                >


                                                                    <td>

                                                                        {
                                                                            aluno.id_aluno
                                                                        }

                                                                    </td>



                                                                    <td>


                                                                        <strong>

                                                                            {
                                                                                aluno.nome
                                                                            }

                                                                        </strong>


                                                                    </td>



                                                                    <td>

                                                                        {
                                                                            aluno.idade
                                                                        }

                                                                    </td>



                                                                    <td>

                                                                        {
                                                                            aluno.serie
                                                                        }

                                                                    </td>



                                                                    <td>

                                                                        {
                                                                            aluno.ra
                                                                        }

                                                                    </td>



                                                                    <td>


                                                                        <div className="acoesTabela">


                                                                            <button

                                                                                className="botaoEditar"

                                                                                type="button"

                                                                                onClick={() =>

                                                                                    editarAluno(

                                                                                        aluno.id_aluno

                                                                                    )

                                                                                }

                                                                            >

                                                                                Editar

                                                                            </button>



                                                                            <button

                                                                                className="botaoExcluir"

                                                                                type="button"

                                                                                onClick={() =>

                                                                                    excluirAluno(

                                                                                        aluno.id_aluno

                                                                                    )

                                                                                }

                                                                            >

                                                                                Excluir

                                                                            </button>


                                                                        </div>


                                                                    </td>


                                                                </tr>

                                                            )

                                                        )

                                                    )
                                        }


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