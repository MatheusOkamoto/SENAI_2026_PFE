
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../components/auth.module.css";

export default function Registro() {
    const router = useRouter();

    const [usuario, setUsuario] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function cadastrar(evento) {
        evento.preventDefault();
        setErro("");
        setCarregando(true);

        try {
            const resposta = await fetch("/api/registro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, nome, senha }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(dados.erro || "Não foi possível criar a conta.");
                return;
            }

            router.replace("/login");
        } catch {
            setErro("Não foi possível conectar ao servidor.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className={styles.main}>
            <section className={styles.card}>
                <aside className={styles.painel}>
                    <span className={styles.marca}>SESI</span>

                    <div>
                        <h2>Seu próximo passo começa aqui.</h2>
                        <p>
                            Cadastre seu acesso para acompanhar e
                            organizar as informações escolares.
                        </p>
                    </div>

                    <small>SISTEMA ESCOLAR · 2026</small>
                </aside>

                <div className={styles.conteudo}>
                    <div className={styles.tituloArea}>
                        <span>NOVA CONTA</span>
                        <h1>Criar cadastro</h1>
                        <p>
                            Preencha os dados abaixo para se registrar.
                        </p>
                    </div>

                    <form
                        onSubmit={cadastrar}
                        className={styles.formulario}
                    >
                        <div className={styles.grupo}>
                            <label htmlFor="nome">Nome</label>
                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                autoComplete="name"
                                placeholder="Seu nome completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                minLength={2}
                                maxLength={100}
                                required
                            />
                        </div>

                        <div className={styles.grupo}>
                            <label htmlFor="usuario">Usuário</label>
                            <input
                                id="usuario"
                                name="usuario"
                                type="text"
                                autoComplete="username"
                                placeholder="Escolha um nome de usuário"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                minLength={3}
                                maxLength={32}
                                pattern="[a-zA-Z0-9._-]+"
                                required
                            />
                        </div>

                        <div className={styles.grupo}>
                            <label htmlFor="senha">Senha</label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Mínimo de 8 caracteres"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                minLength={8}
                                maxLength={128}
                                required
                            />
                        </div>

                        {erro && (
                            <p className={styles.erro} role="alert">
                                {erro}
                            </p>
                        )}

                        <button
                            className={styles.botao}
                            type="submit"
                            disabled={carregando}
                        >
                            {carregando
                                ? "Salvando..."
                                : "Salvar registro"}
                        </button>
                    </form>

                    <p className={styles.divisor}>
                        Já possui cadastro?
                    </p>

                    <Link
                        className={styles.botaoSecundario}
                        href="/login"
                    >
                        Voltar para login
                    </Link>
                </div>
            </section>
        </main>
    );
}
