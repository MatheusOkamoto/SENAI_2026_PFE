
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ============================================
// COMPONENTE DE LOGOUT
// ============================================

export default function LogoutButton() {

    const router = useRouter();

    // Armazenar o nome do usuário
    const [nomeUsuario, setNomeUsuario] = useState("");

    // Armazenar mensagens de erro
    const [erro, setErro] = useState("");

    // Controlar o processo de logout
    const [carregando, setCarregando] = useState(false);


    // ========================================
    // BUSCAR USUÁRIO AUTENTICADO
    // ========================================

    useEffect(() => {

        let ativo = true;

        async function carregarUsuario() {
            try {

                // Consultar a sessão atual
                const resposta = await fetch(
                    "/api/auth/session",
                    {
                        method: "GET",
                        cache: "no-store"
                    }
                );

                if (!ativo) {
                    return;
                }

                // Verificar se a sessão existe
                if (resposta.status === 401) {
                    router.replace("/login");
                    return;
                }

                if (!resposta.ok) {
                    throw new Error(
                        "Erro ao carregar usuário."
                    );
                }

                // Obter os dados do usuário
                const dados = await resposta.json();

                // Atualizar o nome exibido
                if (ativo) {
                    setNomeUsuario(dados.usuario.nome);
                }

            } catch (error) {

                console.error(
                    "Erro ao carregar usuário:",
                    error
                );

                if (ativo) {
                    setErro(
                        "Não foi possível carregar o usuário."
                    );
                }
            }
        }

        carregarUsuario();

        return () => {
            ativo = false;
        };

    }, [router]);


    // ========================================
    // ENCERRAR SESSÃO
    // ========================================

    async function sair() {

        setErro("");
        setCarregando(true);

        try {

            // Enviar requisição para a API de logout
            const resposta = await fetch(
                "/api/auth/logout",
                {
                    method: "POST"
                }
            );

            // Verificar se o logout foi realizado
            if (!resposta.ok) {
                throw new Error(
                    "Não foi possível encerrar a sessão."
                );
            }

            // Redirecionar para a tela de login
            router.replace("/login");

            // Atualizar os componentes do Next.js
            router.refresh();

        } catch (error) {

            console.error(
                "Erro ao realizar logout:",
                error
            );

            setErro(
                "Erro ao sair. Tente novamente."
            );

        } finally {

            setCarregando(false);
        }
    }


    // ========================================
    // INTERFACE DO COMPONENTE
    // ========================================

    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px"
            }}
        >

            {/* Nome do usuário autenticado */}
            {nomeUsuario && (
                <span
                    style={{
                        color: "#303030",
                        fontSize: "13px",
                        fontWeight: "600"
                    }}
                >
                    Olá, {nomeUsuario}
                </span>
            )}

            {/* Botão para sair do sistema */}
            <button
                type="button"
                onClick={sair}
                disabled={carregando}
                style={{
                    padding: "11px 20px",
                    background: "#e30613",
                    color: "#ffffff",
                    border: "1px solid #e30613",
                    borderRadius: "0",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: carregando
                        ? "not-allowed"
                        : "pointer",
                    opacity: carregando ? 0.6 : 1,
                    transition: "background 0.2s ease"
                }}
            >
                {carregando ? "Saindo..." : "Sair"}
            </button>

            {/* Mensagem de erro */}
            {erro && (
                <span
                    role="alert"
                    style={{
                        color: "#b42318",
                        fontSize: "12px"
                    }}
                >
                    {erro}
                </span>
            )}

        </li>
    );
}
