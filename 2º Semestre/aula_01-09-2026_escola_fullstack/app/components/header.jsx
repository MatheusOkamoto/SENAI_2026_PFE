import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="topBar">
                <div className="container topBarContent">
                    <span>SESI-SP</span>
                    <span>Sistema Escolar</span>
                </div>
            </div>

            <header className="header">
                <div className="container headerContent">

                    <Link href="/" className="brand">
                        <div className="brandMark">
                            SESI
                        </div>

                        <div className="brandInfo">
                            <strong>Sistema Escolar</strong>
                            <span>SESI Mirandópolis</span>
                        </div>
                    </Link>

                    <nav className="navigation">
                        <ul>
                            <li>
                                <Link href="/">
                                    Início
                                </Link>
                            </li>

                            <li className="navItemDropdown">
                                <span className="navTitle">
                                    Alunos
                                    <span className="arrow">⌄</span>
                                </span>

                                <div className="dropdown">
                                    <Link href="/cadalunos">
                                        Cadastrar aluno
                                    </Link>

                                    <Link href="/listalunos">
                                        Lista de alunos
                                    </Link>
                                </div>
                            </li>

                            <li className="navItemDropdown">
                                <span className="navTitle">
                                    Notas
                                    <span className="arrow">⌄</span>
                                </span>

                                <div className="dropdown">
                                    <Link href="/cadnotas">
                                        Cadastrar nota
                                    </Link>

                                    <Link href="/listnotas">
                                        Lista de notas
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    );
}