
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../components/auth.module.css";

export default function Login() {
    const router = useRouter();

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function entrar(evento) {
        evento.preventDefault();
        setErro("");
        setCarregando(true);

        try {
            const resposta = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ usuario, senha }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(
                    dados.erro ||
                    "Usuário ou senha inválidos."
                );
                return;
            }

            router.replace("/principal");
            router.refresh();
        } catch {
            setErro(
                "Não foi possível conectar ao servidor."
            );
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className={styles.main}>
            <section className={styles.card}>
                <aside className={styles.painel}>
                    <span className={styles.marca}>
                        SESI
                    </span>

                    <div>
                        <h2>
                            Educação para o futuro.
                        </h2>

                        <p>
                            Acesse o Sistema Escolar
                            para gerenciar alunos,
                            notas e informações acadêmicas.
                        </p>
                    </div>

                    <small>
                        SISTEMA ESCOLAR · 2026
                    </small>
                </aside>

                <div className={styles.conteudo}>
                    <div className={styles.tituloArea}>
                        <span>ÁREA DE ACESSO</span>

                        <h1>Bem-vindo de volta</h1>

                        <p>
                            Entre com suas credenciais
                            para acessar o sistema.
                        </p>
                    </div>

                    <form
                        onSubmit={entrar}
                        className={styles.formulario}
                    >
                        <div className={styles.grupo}>
                            <label htmlFor="usuario">
                                Usuário
                            </label>

                            <input
                                id="usuario"
                                name="usuario"
                                type="text"
                                autoComplete="username"
                                placeholder="Digite seu usuário"
                                value={usuario}
                                onChange={(e) =>
                                    setUsuario(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className={styles.grupo}>
                            <label htmlFor="senha">
                                Senha
                            </label>

                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) =>
                                    setSenha(e.target.value)
                                }
                                required
                            />
                        </div>

                        {erro && (
                            <p
                                className={styles.erro}
                                role="alert"
                            >
                                {erro}
                            </p>
                        )}

                        <button
                            className={styles.botao}
                            type="submit"
                            disabled={carregando}
                        >
                            {carregando
                                ? "Entrando..."
                                : "Entrar no sistema"}
                        </button>
                    </form>

                    <p className={styles.divisor}>
                        Ainda não possui uma conta?
                    </p>

                    <Link
                        className={styles.botaoSecundario}
                        href="/registro"
                    >
                        Criar uma conta
                    </Link>
                </div>
            </section>
        </main>
    );
}
