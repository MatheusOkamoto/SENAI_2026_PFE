import Image from "next/image";
import Link from "next/link";

import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/Banner.png";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-image-container">
            <Image
              src={Banner}
              alt="Banner da turma Terceiro Shark"
              className="hero-image"
              priority
            />
          </div>
        </section>

        <section className="intro container">
          <span className="section-label">SESI MIRANDÓPOLIS</span>

          <h1>Uma turma. Muitas histórias.</h1>

          <p className="intro-text">
            Este site foi criado para registrar os momentos, as conquistas e
            as memórias do Terceiro Shark. Um espaço dedicado à nossa turma e
            a tudo o que construímos juntos.
          </p>

          <div className="button-group">
            <Link href="/sobre" className="button button-primary">
              Conheça nossa turma
            </Link>

            <Link href="/fotos" className="button button-secondary">
              Ver fotos
            </Link>
          </div>
        </section>

        <section className="highlights container">
          <article className="highlight-card">
            <span className="card-number">01</span>
            <h2>Nossa história</h2>
            <p>
              Conheça um pouco mais sobre a turma, nossa trajetória e as
              experiências que marcaram o ano.
            </p>
          </article>

          <article className="highlight-card">
            <span className="card-number">02</span>
            <h2>Nossos momentos</h2>
            <p>
              Trabalhos, eventos, viagens, brincadeiras e acontecimentos que
              ficarão guardados em nossa memória.
            </p>
          </article>

          <article className="highlight-card">
            <span className="card-number">03</span>
            <h2>Nosso legado</h2>
            <p>
              Mais do que concluir uma etapa, deixamos amizades, aprendizados
              e histórias que continuarão conosco.
            </p>
          </article>
        </section>

        <section className="final-message">
          <div className="container">
            <span className="section-label">TERCEIRO SHARK</span>
            <h2>O último ano passa. As memórias permanecem.</h2>

            <Link href="/fotos" className="button button-primary">
              Explorar galeria
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}