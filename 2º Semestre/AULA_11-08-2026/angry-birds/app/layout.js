import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";


export const metadata = {
  title: "Angry Birds | Bomb",
  description:
    "Projeto sobre Angry Birds, seus personagens e o Bomb.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body>

        <Header />

        {children}

        <Footer />

      </body>

    </html>
  );
}