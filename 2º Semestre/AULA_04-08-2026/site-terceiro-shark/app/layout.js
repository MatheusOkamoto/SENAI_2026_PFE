import "./globals.css";

export const metadata = {
  title: "Terceiro Shark",
  description: "Site oficial da turma 3B do SESI Mirandópolis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}