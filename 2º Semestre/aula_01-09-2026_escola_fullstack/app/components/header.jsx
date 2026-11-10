
import Link from "next/link";
import styles from "./header.module.css";
import LogoutButton from "./logout-button";

// ============================================
// CABEÇALHO DO SISTEMA ESCOLAR
// ============================================

export default function Header() {
    return (
        <header className={styles.header}>

            {/* Logo do Sistema Escolar */}
            <h1 className={styles.logo}>
                Sistema Escolar - SESI
            </h1>

            {/* Menu de navegação */}
            <nav aria-label="Navegação principal">
                <ul className={styles.menu}>

                    {/* Página inicial */}
                    <li>
                        <Link href="/principal">
                            Início
                        </Link>
                    </li>

                    {/* Cadastro de alunos */}
                    <li>
                        <Link href="/cadalunos">
                            Cadastro - Alunos
                        </Link>
                    </li>

                    {/* Listagem de alunos */}
                    <li>
                        <Link href="/listalunos">
                            Lista - Alunos
                        </Link>
                    </li>

                    {/* Cadastro de notas */}
                    <li>
                        <Link href="/cadnotas">
                            Cadastro - Notas
                        </Link>
                    </li>

                    {/* Listagem de notas */}
                    <li>
                        <Link href="/listnotas">
                            Lista - Notas
                        </Link>
                    </li>

                    {/* Usuário autenticado e botão Sair */}
                    <LogoutButton />

                </ul>
            </nav>

        </header>
    );
}
