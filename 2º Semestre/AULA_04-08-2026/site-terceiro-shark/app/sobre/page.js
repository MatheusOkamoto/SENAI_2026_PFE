import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <>
      <Header />

      <main className="internal-page container">
        <span className="section-label">SOBRE NÓS</span>

        <h1>Conheça o Terceiro Shark</h1>

        <p>
          Somos a turma 3B do SESI Mirandópolis. Ao longo do ano, construímos
          experiências, enfrentamos desafios e compartilhamos momentos que
          marcaram nossa trajetória no Ensino Médio.
        </p>
      </main>

      <Footer />
    </>
  );
}