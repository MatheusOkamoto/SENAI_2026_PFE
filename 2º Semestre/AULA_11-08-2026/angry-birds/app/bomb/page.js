import Image from "next/image";
import Link from "next/link";

export default function Bomb() {
  return (
    <main>

      {/* ========================================
          APRESENTAÇÃO DO BOMB
      ======================================== */}
      <section className="bombHero">

        <div className="bombHeroTexto">

          <span className="bombHeroCategoria">
            PERSONAGEM EM DESTAQUE
          </span>

          <h1>
            BOMB.
          </h1>

          <h2>
            O mais explosivo
            <br />
            do bando.
          </h2>

          <p>
            Entre todos os personagens de Angry Birds,
            Bomb é um dos mais fáceis de reconhecer.
            Seu visual escuro, suas sobrancelhas vermelhas
            e seu pavio deixam uma pista bem clara sobre
            sua principal habilidade.
          </p>

        </div>


        <div className="bombHeroImagem">

          <div className="bombHeroCirculo">

            <Image
              src="/img/bomb.png"
              alt="Bomb de Angry Birds"
              width={650}
              height={650}
              className="bombHeroPNG"
              priority
            />

          </div>

          <span className="bombHeroNumero">
            03
          </span>

        </div>

      </section>


      {/* ========================================
          FICHA DO PERSONAGEM
      ======================================== */}
      <section className="bombFicha">

        <div className="bombFichaTitulo">

          <span>
            PERFIL
          </span>

          <h2>
            Quem é
            <br />
            Bomb?
          </h2>

        </div>


        <div className="bombFichaDados">

          <div className="fichaLinha">
            <span>Nome</span>
            <strong>Bomb</strong>
          </div>

          <div className="fichaLinha">
            <span>Universo</span>
            <strong>Angry Birds</strong>
          </div>

          <div className="fichaLinha">
            <span>Cor principal</span>
            <strong>Preto</strong>
          </div>

          <div className="fichaLinha">
            <span>Característica</span>
            <strong>Explosivo</strong>
          </div>

          <div className="fichaLinha">
            <span>Habilidade</span>
            <strong>Explosão</strong>
          </div>

        </div>

      </section>


      {/* ========================================
          IDENTIDADE VISUAL
      ======================================== */}
      <section className="bombVisual">

        <div className="bombVisualImagem">

          <Image
            src="/img/bomb.png"
            alt="Visual do personagem Bomb"
            width={600}
            height={600}
            className="bombVisualPNG"
          />

        </div>


        <div className="bombVisualTexto">

          <span>
            IDENTIDADE VISUAL
          </span>

          <h2>
            Impossível
            <br />
            confundir.
          </h2>

          <p>
            Bomb possui um dos designs mais característicos
            do grupo. O corpo predominantemente preto contrasta
            com detalhes vermelhos, amarelos e alaranjados.
          </p>

          <p>
            O pavio localizado no topo da cabeça reforça
            visualmente a ideia de uma bomba, enquanto
            suas sobrancelhas deixam sua expressão ainda
            mais intensa.
          </p>


          <div className="coresBomb">

            <div>
              <span className="corBolinha corPreta"></span>
              Preto
            </div>

            <div>
              <span className="corBolinha corVermelha"></span>
              Vermelho
            </div>

            <div>
              <span className="corBolinha corAmarela"></span>
              Amarelo
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          HABILIDADE
      ======================================== */}
      <section className="bombHabilidade">

        <div className="habilidadeNumero">
          01
        </div>


        <div className="habilidadeConteudo">

          <span>
            SUA MARCA REGISTRADA
          </span>

          <h2>
            BOOM.
          </h2>

          <p>
            A característica que define Bomb é justamente
            sua capacidade explosiva.
          </p>

          <p>
            Essa habilidade combina com sua aparência
            e ajuda a transformar o personagem em um
            dos integrantes mais marcantes do grupo.
          </p>

        </div>

      </section>


      {/* ========================================
          COSPLAY
      ======================================== */}
      <section className="bombCosplay" id="cosplay">

        <div className="bombCosplayTexto">

          <span>
            MINHA ESCOLHA
          </span>

          <h2>
            Por que
            <br />
            Bomb?
          </h2>

          <p>
            Quando escolhi um personagem para representar,
            Bomb tinha uma grande vantagem: seu visual
            é extremamente reconhecível.
          </p>

          <p>
            A máscara foi construída tentando reproduzir
            os elementos mais importantes do personagem,
            principalmente as cores, as sobrancelhas,
            o pavio e o grande bico.
          </p>

          <Link
            href="/fotos"
            className="bombCosplayLink"
          >
            Ver o cosplay completo →
          </Link>

        </div>


        <div className="bombCosplayFoto">

          <Image
            src="/img/bomb-cosplay.jpg"
            alt="Meu cosplay inspirado no Bomb"
            width={1280}
            height={720}
            className="bombCosplayImagem"
          />

          <div className="bombCosplayEtiqueta">
            BOMB IRL
          </div>

        </div>

      </section>


      {/* ========================================
          GALERIA
      ======================================== */}
      <section className="bombFotos">

        <div className="bombFotosTitulo">

          <span>
            GALERIA
          </span>

          <h2>
            Bomb saiu
            <br />
            da tela.
          </h2>

          <p>
            O cosplay foi construído a partir de alguns dos
            elementos mais reconhecíveis do personagem.
          </p>

        </div>


        <div className="bombFotosGrid">

          {/* FOTO COMPLETA */}
          <div className="bombFoto bombFotoGrande">

            <Image
              src="/img/bomb-cosplay.jpg"
              alt="Cosplay completo inspirado no Bomb"
              fill
              sizes="(max-width: 700px) 100vw, 65vw"
              className="bombFotoImagem"
            />

            <div className="bombFotoLegenda">
              <span>01</span>

              <strong>
                COSPLAY COMPLETO
              </strong>
            </div>

          </div>


          {/* ROSTO */}
          <div className="bombFoto bombFotoPequena">

            <Image
              src="/img/bomb-rosto.jpg"
              alt="Detalhe do rosto do cosplay do Bomb"
              fill
              sizes="(max-width: 700px) 100vw, 35vw"
              className="bombFotoImagem"
            />

            <div className="bombFotoLegenda">
              <span>02</span>

              <strong>
                ROSTO
              </strong>
            </div>

          </div>


          {/* BICO */}
          <div className="bombFoto bombFotoPequena">

            <Image
              src="/img/bomb-bico.jpg"
              alt="Detalhe do bico do cosplay do Bomb"
              fill
              sizes="(max-width: 700px) 100vw, 35vw"
              className="bombFotoImagem"
            />

            <div className="bombFotoLegenda">
              <span>03</span>

              <strong>
                BICO
              </strong>
            </div>

          </div>

        </div>


        <Link
          href="/fotos"
          className="bombFotosBotao"
        >
          Ver página completa do cosplay →
        </Link>

      </section>


      {/* ========================================
          FINAL
      ======================================== */}
      <section className="bombFinal">

        <span>
          ANGRY BIRDS / BOMB
        </span>

        <h2>
          Agora conheça
          <br />
          o resto do bando.
        </h2>

        <Link
          href="/personagens"
          className="botaoPrincipal"
        >
          Ver personagens
        </Link>

      </section>

    </main>
  );
}