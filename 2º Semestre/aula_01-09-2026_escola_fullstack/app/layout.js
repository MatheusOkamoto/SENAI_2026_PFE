
import "./globals.css";
import AuthGate from "./components/auth-gate";

// ============================================
// METADADOS DO SISTEMA
// ============================================

export const metadata = {
    title: "Sistema Escolar | SESI Mirandópolis",
    description:
        "Sistema escolar para cadastro de alunos e gerenciamento de notas.",
};

// ============================================
// LAYOUT PRINCIPAL
// ============================================

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {/* Verificação de autenticação */}
                <AuthGate>
                    {children}
                </AuthGate>
            </body>
        </html>
    );
}
