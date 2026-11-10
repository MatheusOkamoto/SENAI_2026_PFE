
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// ============================================
// COMPONENTE DE PROTEÇÃO DAS PÁGINAS
// ============================================

export default function AuthGate({ children }) {

    const router = useRouter();
    const pathname = usePathname();

    // Armazenar o resultado da verificação
    const [verificacao, setVerificacao] = useState({
        pathname: null,
        status: "checking"
    });

    // Páginas que não precisam de autenticação
    const paginasPublicas = [
        "/login",
        "/registro"
    ];

    const paginaPublica = paginasPublicas.includes(pathname);

    // Determinar o estado atual de acesso
    const status = paginaPublica
        ? "public"
        : verificacao.pathname === pathname
            ? verificacao.status
            : "checking";

    // ========================================
    // VERIFICAR SESSÃO
    // ========================================

    useEffect(() => {

        // Não verificar autenticação nas páginas públicas
        if (paginasPublicas.includes(pathname)) {
            return;
        }

        let ativo = true;

        async function verificarSessao() {

            try {

                // Consultar a API de autenticação
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

                // Sessão inexistente ou expirada
                if (resposta.status === 401) {
                    router.replace("/login");
                    return;
                }

                // Outros erros do servidor
                if (!resposta.ok) {
                    throw new Error(
                        "Erro ao verificar autenticação."
                    );
                }

                // Usuário autenticado
                setVerificacao({
                    pathname,
                    status: "authenticated"
                });

            } catch (error) {

                console.error(
                    "Erro ao verificar sessão:",
                    error
                );

                if (ativo) {
                    setVerificacao({
                        pathname,
                        status: "error"
                    });
                }
            }
        }

        verificarSessao();

        // Evitar atualizar estado após desmontagem
        return () => {
            ativo = false;
        };

    }, [pathname, router]);

    // ========================================
    // PERMITIR ACESSO
    // ========================================

    if (
        status === "public" ||
        status === "authenticated"
    ) {
        return children;
    }

    // ========================================
    // TELA DE VERIFICAÇÃO
    // ========================================

    return (
        <main
            aria-live="polite"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                padding: "24px",
                background: "#f5f5f5",
                color: "#202020",
                textAlign: "center"
            }}
        >
            <div
                style={{
                    padding: "12px 18px",
                    background: "#e30613",
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "900"
                }}
            >
                SESI
            </div>

            {status === "error" ? (
                <>
                    <h2>Erro de autenticação</h2>

                    <p>
                        Não foi possível verificar sua sessão.
                        Recarregue a página para tentar novamente.
                    </p>
                </>
            ) : (
                <>
                    <h2>Sistema Escolar</h2>

                    <p>Verificando sua sessão...</p>
                </>
            )}
        </main>
    );
}
