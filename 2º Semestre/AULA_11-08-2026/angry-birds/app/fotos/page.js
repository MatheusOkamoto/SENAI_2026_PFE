import Image from "next/image";
import Link from "next/link";

export default function Fotos() {
  return (
    <main>

      {/* ========================================
          HERO
      ======================================== */}
      <section className="fotosHero">

        <div className="fotosHeroTexto">

          <span>
            COSPLAY / BOMB
          </span>

          <h1>
            DO JOGO
            <br />
            PARA A
            <br />
            <strong>VIDA REAL.</strong>
          </h1>

          <p>
            Para este projeto, Bomb não ficou apenas na tela.
            O personagem também virou inspiração para um cosplay
            feito a partir de suas características mais marcantes.
          </p>

          <a
            href="#cosplay"
            className="botaoPrincipal"
          >
            Ver o cosplay
          </a>

        </div>


        <div className="fotosHeroImagem">

          <Image
            src="/img/bomb-cosplay.jpg"
            alt="Meu cosplay inspirado no Bomb de Angry Birds"
            width={1280}
            height={720}
            className="fotoHeroCosplay"
            priority
          />

          <div className="fotosHeroEtiqueta">
            BOMB
            <br />
            IRL
          </div>

        </div>

      </section>


      {/* ========================================
          COMPARAÇÃO
      ======================================== */}
      <section
        className="comparacaoCosplay"
        id="cosplay"
      >

        <div className="comparacaoTitulo">

          <span>
            PERSONAGEM X COSPLAY
          </span>

          <h2>
            Da referência
            <br />
            para a realidade.
          </h2>

          <p>
            A ideia não foi reproduzir cada detalhe perfeitamente,
            mas identificar os elementos visuais que fazem Bomb
            ser reconhecido imediatamente.
          </p>

        </div>


        <div className="comparacaoImagens">

          {/* PERSONAGEM ORIGINAL */}
          <div className="comparacaoCard personagemOriginal">

            <span className="comparacaoNumero">
              01
            </span>

            <div className="comparacaoBombImagem">

              <Image
                src="/img/bomb.png"
                alt="Bomb de Angry Birds"
                width={600}
                height={600}
                className="comparacaoBombPNG"
              />

            </div>

            <div className="comparacaoLegenda">

              <span>
                REFERÊNCIA
              </span>

              <h3>
                Bomb
              </h3>

              <p>
                Personagem original
              </p>

            </div>

          </div>


          {/* COSPLAY */}
          <div className="comparacaoCard cosplayReal">

            <span className="comparacaoNumero">
              02
            </span>

            <div className="comparacaoFotoContainer">

              <Image
                src="/img/bomb-cosplay.jpg"
                alt="Meu cosplay inspirado no Bomb"
                width={1280}
                height={720}
                className="comparacaoFoto"
              />

            </div>

            <div className="comparacaoLegenda">

              <span>
                INTERPRETAÇÃO
              </span>

              <h3>
                Cosplay
              </h3>

              <p>
                Minha versão do personagem
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          DETALHES DO COSPLAY
      ======================================== */}
      <section className="detalhesCosplay">

        <div className="detalhesTitulo">

          <span>
            CONSTRUINDO O PERSONAGEM
          </span>

          <h2>
            Quatro detalhes
            <br />
            fazem a diferença.
          </h2>

        </div>


        <div className="detalhesGrid">

          {/* PRETO */}
          <div className="detalheCard detalhePreto">

            <span>
              01
            </span>

            <h3>
              Preto
            </h3>

            <p>
              A cor predominante do personagem foi usada
              como base visual do cosplay.
            </p>

          </div>


          {/* SOBRANCELHAS */}
          <div className="detalheCard detalheVermelho">

            <span>
              02
            </span>

            <h3>
              Sobrancelhas
            </h3>

            <p>
              O vermelho cria contraste e ajuda a reproduzir
              a expressão intensa característica do Bomb.
            </p>

          </div>


          {/* PAVIO */}
          <div className="detalheCard detalheAmarelo">

            <span>
              03
            </span>

            <h3>
              Pavio
            </h3>

            <p>
              O detalhe no topo da cabeça faz referência direta
              à principal característica do personagem.
            </p>

          </div>


          {/* BICO */}
          <div className="detalheCard detalheLaranja">

            <span>
              04
            </span>

            <h3>
              Bico
            </h3>

            <p>
              O grande bico laranja é uma das partes que mais
              chamam atenção quando o cosplay é visto de frente.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          GALERIA
      ======================================== */}
      <section className="galeriaCosplay">

        <div className="galeriaTitulo">

          <span>
            GALERIA
          </span>

          <h2>
            Bomb em
            <br />
            detalhes.
          </h2>

          <p>
            Uma visão geral do cosplay e dois detalhes
            importantes da caracterização.
          </p>

        </div>


        <div className="galeriaGrid">

          {/* FOTO COMPLETA */}
          <div className="galeriaFoto galeriaFotoPrincipal">

            <Image
              src="/img/bomb-cosplay.jpg"
              alt="Visão completa do cosplay do Bomb"
              fill
              sizes="(max-width: 700px) 100vw, 65vw"
              className="galeriaImagem"
            />

            <div className="galeriaLegenda">
              VISÃO COMPLETA
            </div>

          </div>


          {/* ROSTO */}
          <div className="galeriaFoto">

            <Image
              src="/img/bomb-rosto.jpg"
              alt="Detalhe do rosto do cosplay do Bomb"
              fill
              sizes="(max-width: 700px) 100vw, 35vw"
              className="galeriaImagem"
            />

            <div className="galeriaLegenda">
              ROSTO
            </div>

          </div>


          {/* BICO */}
          <div className="galeriaFoto">

            <Image
              src="/img/bomb-bico.jpg"
              alt="Detalhe do bico do cosplay do Bomb"
              fill
              sizes="(max-width: 700px) 100vw, 35vw"
              className="galeriaImagem"
            />

            <div className="galeriaLegenda">
              BICO
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          FRASE
      ======================================== */}
      <section className="cosplayFrase">

        <span>
          BOMB / ANGRY BIRDS
        </span>

        <h2>
          Algumas características
          <br />
          já são suficientes para
          <br />
          reconhecer um personagem.
        </h2>

      </section>


      {/* ========================================
          FINAL
      ======================================== */}
      <section className="fotosFinal">

        <div>

          <span>
            QUER SABER MAIS?
          </span>

          <h2>
            Conheça o personagem
            <br />
            por trás do cosplay.
          </h2>

        </div>


        <Link
          href="/bomb"
          className="botaoFotosFinal"
        >
          Tudo sobre o Bomb →
        </Link>

      </section>

    </main>
  );
}