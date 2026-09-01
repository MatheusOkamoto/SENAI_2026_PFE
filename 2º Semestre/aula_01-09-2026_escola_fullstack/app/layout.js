import "./globals.css";

export const metadata = {
    title: "Sistema Escolar | SESI Mirandópolis",
    description:
        "Sistema escolar para cadastro de alunos e gerenciamento de notas.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}