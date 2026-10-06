'use client';


import {

    useEffect,

    useState

} from 'react';


import {

    useParams,

    useRouter

} from 'next/navigation';


import Header from '../../components/header';



export default function EditAlunos() {


    const params =
        useParams();


    const router =
        useRouter();



    /*
        Se a URL for:

        /editalunos/5

        então:

        params.id = "5"
    */

    const id =
        params.id;



    const [nome, setNome] =
        useState('');


    const [idade, setIdade] =
        useState('');


    const [serie, setSerie] =
        useState('');


    const [ra, setRa] =
        useState('');


    const [carregando, setCarregando] =
        useState(true);


    const [salvando, setSalvando] =
        useState(false);



    /* =====================================================
       CARREGAR DADOS DO ALUNO
    ===================================================== */

    useEffect(() => {


        async function carregarAluno() {


            try {


                const resposta =
                    await fetch(

                        `/api/alunos?id=${id}`,

                        {

                            cache:
                                'no-store'

                        }

                    );



                const dados =
                    await resposta.json();



                if (!resposta.ok) {


                    throw new Error(
                        dados.message
                    );


                }



                setNome(
                    dados.nome
                );


                setIdade(
                    String(
                        dados.idade
                    )
                );


                setSerie(
                    dados.serie
                );


                setRa(
                    dados.ra
                );



            } catch (error) {


                console.error(

                    'Erro ao carregar aluno:',

                    error

                );


                alert(

                    error.message ||

                    'Não foi possível carregar o aluno.'

                );


                router.push(
                    '/listalunos'
                );


            } finally {


                setCarregando(false);


            }


        }



        if (id) {


            carregarAluno();


        }


    }, [id, router]);



    /* =====================================================
       SALVAR ALTERAÇÕES
    ===================================================== */

    async function editarAluno(e) {


        e.preventDefault();


        try {


            setSalvando(true);



            const resposta =
                await fetch(

                    '/api/alunos',

                    {

                        method:
                            'PUT',


                        headers: {

                            'Content-Type':
                                'application/json'

                        },


                        body:
                            JSON.stringify({

                                id_aluno:
                                    Number(id),

                                nome,

                                idade:
                                    Number(idade),

                                serie,

                                ra

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
                'Aluno editado com sucesso!'
            );



            router.push(
                '/listalunos'
            );


            router.refresh();



        } catch (error) {


            console.error(

                'Erro ao editar aluno:',

                error

            );


            alert(

                error.message ||

                'Não foi possível editar o aluno.'

            );


        } finally {


            setSalvando(false);


        }


    }



    /* =====================================================
       TELA DE CARREGAMENTO
    ===================================================== */

    if (carregando) {


        return (

            <>

                <Header />


                <main className="cadAlunoPage">


                    <section className="cadAlunoSection">


                        <div className="container">


                            <p>

                                Carregando aluno...

                            </p>


                        </div>


                    </section>


                </main>

            </>

        );


    }



    /* =====================================================
       PÁGINA
    ===================================================== */

    return (

        <>

            <Header />


            <main className="cadAlunoPage">


                <section className="cadAlunoSection">


                    <div className="container cadAlunoGrid">



                        {/* LADO ESQUERDO */}

                        <div className="cadAlunoIntro">


                            <span className="sectionLabel">

                                ALUNOS

                            </span>


                            <h1>

                                Editar

                                <span>
                                    {' '}aluno.
                                </span>

                            </h1>


                            <p>

                                Altere os dados do estudante
                                e salve as novas informações
                                no sistema escolar.

                            </p>



                            <div className="cadAlunoInfo">


                                <span>

                                    02

                                </span>


                                <div>


                                    <strong>

                                        Atualizar estudante

                                    </strong>


                                    <p>

                                        Confira os dados cadastrados
                                        antes de salvar as alterações.

                                    </p>


                                </div>


                            </div>


                        </div>



                        {/* LADO DIREITO */}

                        <div className="cadAlunoFormArea">


                            <div className="formHeader">


                                <div>


                                    <span>

                                        EDIÇÃO

                                    </span>


                                    <h2>

                                        Dados do aluno

                                    </h2>


                                </div>



                                <span className="formNumber">

                                    ID {id}

                                </span>


                            </div>



                            <form

                                className="cadAlunoForm"

                                onSubmit={editarAluno}

                            >



                                {/* NOME */}

                                <div className="formGroup formGroupFull">


                                    <label htmlFor="nome">

                                        Nome completo

                                    </label>


                                    <input

                                        id="nome"

                                        type="text"

                                        placeholder="Digite o nome do aluno"

                                        value={nome}

                                        onChange={(e) =>

                                            setNome(
                                                e.target.value
                                            )

                                        }

                                        required

                                    />


                                </div>



                                {/* IDADE */}

                                <div className="formGroup">


                                    <label htmlFor="idade">

                                        Idade

                                    </label>


                                    <input

                                        id="idade"

                                        type="number"

                                        min="1"

                                        placeholder="Ex: 16"

                                        value={idade}

                                        onChange={(e) =>

                                            setIdade(
                                                e.target.value
                                            )

                                        }

                                        required

                                    />


                                </div>



                                {/* SÉRIE */}

                                <div className="formGroup">


                                    <label htmlFor="serie">

                                        Série

                                    </label>


                                    <input

                                        id="serie"

                                        type="text"

                                        placeholder="Ex: 3º EM"

                                        value={serie}

                                        onChange={(e) =>

                                            setSerie(
                                                e.target.value
                                            )

                                        }

                                        required

                                    />


                                </div>



                                {/* RA */}

                                <div className="formGroup formGroupFull">


                                    <label htmlFor="ra">

                                        RA

                                    </label>


                                    <input

                                        id="ra"

                                        type="text"

                                        placeholder="Digite o RA do aluno"

                                        value={ra}

                                        onChange={(e) =>

                                            setRa(
                                                e.target.value
                                            )

                                        }

                                        required

                                    />


                                </div>



                                {/* BOTÕES */}

                                <div className="formActions">


                                    <span>

                                        Verifique os dados
                                        antes de salvar.

                                    </span>


                                    <button

                                        type="submit"

                                        disabled={salvando}

                                    >


                                        {

                                            salvando

                                                ? 'Salvando...'

                                                : 'Salvar alterações'

                                        }


                                        <span>

                                            →

                                        </span>


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