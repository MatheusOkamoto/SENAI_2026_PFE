import Header from "../components/header";
import Footer from "../components/footer";

export default function Fotos() {
  return (
    <>
      <Header />

      <main className="internal-page container">
        <span className="section-label">GALERIA</span>

        <h1>Nossos momentos</h1>

        <p>
          Em breve, esta página reunirá fotos de eventos, projetos, viagens e
          outros momentos especiais vividos pelo Terceiro Shark.
        </p>
      </main>

      <Footer />
    </>
  );
}