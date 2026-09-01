import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export default function Principal() {
    return (
        <>
            <Header />

            <main>

                {/* HERO */}
                <section className="hero">
                    <div className="container heroGrid">

                        <div className="heroText">
                            <span className="sectionLabel">
                                SESI MIRANDÓPOLIS
                            </span>

                            <h1>
                                Educação e organização
                                <span> em um só lugar.</span>
                            </h1>

                            <p>
                                Consulte alunos, registre notas e acesse
                                informações escolares de forma simples.
                            </p>

                            <div className="heroActions">
                                <Link
                                    href="/listalunos"
                                    className="primaryButton"
                                >
                                    Acessar sistema
                                    <span>→</span>
                                </Link>

                                <a
                                    href="#acesso-rapido"
                                    className="secondaryButton"
                                >
                                    Ver opções
                                </a>
                            </div>
                        </div>

                        <div className="heroImage">
                            <Image
                                src="/IMG/foto1.jpg"
                                alt="Alunos do SESI em atividade escolar"
                                fill
                                priority
                                sizes="(max-width: 900px) 100vw, 50vw"
                            />

                            <div className="heroImageTag">
                                <span>SESI-SP</span>
                                <strong>Educação para o futuro</strong>
                            </div>
                        </div>

                    </div>
                </section>


                {/* FAIXA INSTITUCIONAL */}
                <section className="redStrip">
                    <div className="container redStripContent">

                        <div>
                            <strong>SESI Mirandópolis</strong>
                            <span>Escola SESI-SP</span>
                        </div>

                        <div className="redStripDivider"></div>

                        <div>
                            <strong>CE 323</strong>
                            <span>Mirandópolis • SP</span>
                        </div>

                        <div className="redStripDivider"></div>

                        <div>
                            <strong>Sistema Escolar</strong>
                            <span>Projeto acadêmico • 2026</span>
                        </div>

                    </div>
                </section>


                {/* ACESSO RÁPIDO */}
                <section
                    className="quickAccess"
                    id="acesso-rapido"
                >
                    <div className="container">

                        <div className="sectionHeader">
                            <div>
                                <span className="sectionLabel">
                                    ACESSO RÁPIDO
                                </span>

                                <h2>
                                    O que você precisa?
                                </h2>
                            </div>

                            <p>
                                Acesse diretamente as principais funções
                                do sistema escolar.
                            </p>
                        </div>


                        <div className="accessGrid">

                            <Link
                                href="/cadalunos"
                                className="accessCard"
                            >
                                <div className="cardTop">
                                    <span className="cardNumber">
                                        01
                                    </span>

                                    <span className="cardArrow">
                                        ↗
                                    </span>
                                </div>

                                <div className="cardSymbol">
                                    +
                                </div>

                                <h3>
                                    Cadastrar aluno
                                </h3>

                                <p>
                                    Adicione um novo estudante ao sistema.
                                </p>
                            </Link>


                            <Link
                                href="/listalunos"
                                className="accessCard"
                            >
                                <div className="cardTop">
                                    <span className="cardNumber">
                                        02
                                    </span>

                                    <span className="cardArrow">
                                        ↗
                                    </span>
                                </div>

                                <div className="cardSymbol">
                                    ≡
                                </div>

                                <h3>
                                    Lista de alunos
                                </h3>

                                <p>
                                    Veja os estudantes que já foram cadastrados.
                                </p>
                            </Link>


                            <Link
                                href="/cadnotas"
                                className="accessCard"
                            >
                                <div className="cardTop">
                                    <span className="cardNumber">
                                        03
                                    </span>

                                    <span className="cardArrow">
                                        ↗
                                    </span>
                                </div>

                                <div className="cardSymbol">
                                    ✓
                                </div>

                                <h3>
                                    Cadastrar nota
                                </h3>

                                <p>
                                    Registre novas notas dos estudantes.
                                </p>
                            </Link>


                            <Link
                                href="/listnotas"
                                className="accessCard"
                            >
                                <div className="cardTop">
                                    <span className="cardNumber">
                                        04
                                    </span>

                                    <span className="cardArrow">
                                        ↗
                                    </span>
                                </div>

                                <div className="cardSymbol">
                                    10
                                </div>

                                <h3>
                                    Consultar notas
                                </h3>

                                <p>
                                    Consulte os registros acadêmicos existentes.
                                </p>
                            </Link>

                        </div>
                    </div>
                </section>


                {/* VIDA ESCOLAR */}
                <section className="schoolSection">
                    <div className="container schoolGrid">

                        <div className="schoolImage">
                            <Image
                                src="/IMG/foto2.jpg"
                                alt="Estudantes do SESI participando de atividades"
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                            />
                        </div>


                        <div className="schoolText">

                            <span className="sectionLabel">
                                VIDA ESCOLAR
                            </span>

                            <h2>
                                Um sistema feito para a rotina da escola.
                            </h2>

                            <p>
                                O projeto reúne em um único ambiente
                                informações importantes do dia a dia escolar,
                                como cadastro de estudantes e lançamento
                                de notas.
                            </p>

                            <p>
                                A proposta é tornar essas tarefas mais
                                organizadas e fáceis de consultar.
                            </p>

                            <div className="schoolDetails">

                                <div>
                                    <span>01</span>

                                    <div>
                                        <strong>
                                            Alunos
                                        </strong>

                                        <p>
                                            Cadastro e consulta.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <span>02</span>

                                    <div>
                                        <strong>
                                            Notas
                                        </strong>

                                        <p>
                                            Registro e visualização.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* PROJETO */}
                <section className="projectSection">
                    <div className="container projectGrid">

                        <div>
                            <span className="lightLabel">
                                O PROJETO
                            </span>

                            <h2>
                                Tecnologia aplicada à escola.
                            </h2>
                        </div>

                        <div className="projectText">
                            <p>
                                Este sistema foi desenvolvido como projeto
                                acadêmico, aplicando conhecimentos de
                                desenvolvimento web a uma situação próxima
                                da realidade escolar.
                            </p>

                            <div className="techList">
                                <span>Next.js</span>
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>CSS</span>
                            </div>
                        </div>

                    </div>
                </section>

            </main>


            {/* FOOTER */}
            <footer className="footer">

                <div className="container footerMain">

                    <div className="footerBrand">

                        <div className="footerLogo">
                            SESI
                        </div>

                        <div>
                            <strong>
                                Sistema Escolar
                            </strong>

                            <span>
                                SESI Mirandópolis
                            </span>
                        </div>

                    </div>

                    <div className="footerLinks">
                        <Link href="/">
                            Início
                        </Link>

                        <Link href="/listalunos">
                            Alunos
                        </Link>

                        <Link href="/listnotas">
                            Notas
                        </Link>
                    </div>

                </div>


                <div className="container footerBottom">
                    <span>
                        Projeto acadêmico • 2026
                    </span>

                    <span>
                        Escola SESI-SP • CE 323
                    </span>
                </div>

            </footer>
        </>
    );
}