
import Link from "next/link";
import styles from "./header.module.css";
import LogoutButton from "./logout-button";

// ============================================
// ITENS DOS MENUS
// ============================================

const menus = [
    {
        titulo: "Alunos",
        links: [
            { nome: "Cadastrar Aluno", href: "/cadalunos" },
            { nome: "Listar Alunos", href: "/listalunos" }
        ]
    },
    {
        titulo: "Notas",
        links: [
            { nome: "Cadastrar Notas", href: "/cadnotas" },
            { nome: "Listar Notas", href: "/listnotas" }
        ]
    },
    {
        titulo: "Disciplinas",
        links: [
            {
                nome: "Cadastrar Disciplina",
                href: "/caddisciplinas"
            },
            {
                nome: "Listar Disciplinas",
                href: "/listdisciplinas"
            }
        ]
    },
    {
        titulo: "Professores",
        links: [
            {
                nome: "Cadastrar Professor",
                href: "/cadprofessores"
            },
            {
                nome: "Listar Professores",
                href: "/listprofessores"
            }
        ]
    }
];

// ============================================
// CABEÇALHO PRINCIPAL
// ============================================

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>

                {/* LOGO */}

                <Link
                    href="/principal"
                    className={styles.brand}
                >
                    <span className={styles.brandMark}>
                        SESI
                    </span>

                    <span className={styles.brandText}>
                        Sistema Escolar
                        <small>Mirandópolis</small>
                    </span>
                </Link>

                {/* NAVEGAÇÃO */}

                <nav
                    className={styles.navigation}
                    aria-label="Navegação principal"
                >
                    <Link
                        href="/principal"
                        className={styles.home}
                    >
                        Início
                    </Link>

                    {menus.map((menu) => (
                        <details
                            key={menu.titulo}
                            className={styles.dropdown}
                        >
                            <summary className={styles.trigger}>
                                {menu.titulo}

                                <span
                                    className={styles.chevron}
                                    aria-hidden="true"
                                >
                                    ▾
                                </span>
                            </summary>

                            <div className={styles.dropdownMenu}>
                                {menu.links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                    >
                                        {link.nome}
                                    </Link>
                                ))}
                            </div>
                        </details>
                    ))}
                </nav>

                {/* USUÁRIO E LOGOUT */}

                <ul className={styles.conta}>
                    <LogoutButton />
                </ul>

            </div>
        </header>
    );
}
