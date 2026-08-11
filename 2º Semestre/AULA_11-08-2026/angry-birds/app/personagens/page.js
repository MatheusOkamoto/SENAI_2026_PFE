import Image from "next/image";
import Link from "next/link";

export default function Personagens() {
  return (
    <main>

      {/* ========================================
          HERO
      ======================================== */}
      <section className="personagensHero">

        <div className="personagensHeroTexto">

          <span>
            ANGRY BIRDS
          </span>

          <h1>
            CONHEÇA
            <br />
            O BANDO.
          </h1>

          <p>
            Eles podem lutar pelo mesmo objetivo,
            mas definitivamente não fazem isso do mesmo jeito.
            Cada pássaro possui personalidade, aparência
            e habilidades próprias.
          </p>

        </div>


        <div className="personagensHeroImagem">

          <Image
            src="/img/angry-birds-grupo.jpg"
            alt="Grupo de personagens de Angry Birds"
            width={1000}
            height={700}
            className="grupoPersonagens"
            priority
          />

          <div className="heroPersonagensEtiqueta">
            THE
            <br />
            FLOCK
          </div>

        </div>

      </section>


      {/* ========================================
          INTRODUÇÃO
      ======================================== */}
      <section className="personagensIntro">

        <span>
          PERSONAGENS
        </span>

        <h2>
          Seis pássaros.
          <br />
          Seis personalidades.
          <br />
          Muito caos.
        </h2>

      </section>


      {/* ========================================
          RED
      ======================================== */}
      <section className="personagemLinha personagemRed">

        <div className="personagemLinhaImagem">

          <span className="personagemFundoNumero">
            01
          </span>

          <Image
            src="/img/Red.png"
            alt="Red de Angry Birds"
            width={600}
            height={600}
            className="personagemPNG"
          />

        </div>


        <div className="personagemLinhaTexto">

          <span className="personagemCategoria">
            01 / O LÍDER
          </span>

          <h2>
            RED
          </h2>

          <h3>
            Irritado por natureza.
          </h3>

          <p>
            Red é um dos personagens mais conhecidos de Angry Birds
            e funciona como uma das principais figuras do grupo.
          </p>

          <p>
            Sua personalidade séria e impaciente combina perfeitamente
            com as famosas sobrancelhas que se tornaram uma das marcas
            visuais da franquia.
          </p>

          <div className="personagemTags">
            <span>LIDERANÇA</span>
            <span>DETERMINAÇÃO</span>
            <span>RAIVA</span>
          </div>

        </div>

      </section>


      {/* ========================================
          CHUCK
      ======================================== */}
      <section className="personagemLinha personagemChuck">

        <div className="personagemLinhaTexto">

          <span className="personagemCategoria">
            02 / O VELOZ
          </span>

          <h2>
            CHUCK
          </h2>

          <h3>
            Primeiro ele corre.
            <br />
            Depois ele pensa.
          </h3>

          <p>
            Chuck é o pássaro amarelo do grupo e tem na velocidade
            uma de suas características mais reconhecíveis.
          </p>

          <p>
            Sua personalidade agitada acompanha seu visual
            triangular e sua energia praticamente inesgotável.
          </p>

          <div className="personagemTags tagsEscuras">
            <span>VELOCIDADE</span>
            <span>ENERGIA</span>
            <span>AGITAÇÃO</span>
          </div>

        </div>


        <div className="personagemLinhaImagem">

          <span className="personagemFundoNumero">
            02
          </span>

          <Image
            src="/img/Chuck.png"
            alt="Chuck de Angry Birds"
            width={600}
            height={600}
            className="personagemPNG"
          />

        </div>

      </section>


      {/* ========================================
          BOMB - DESTAQUE ESPECIAL
      ======================================== */}
      <section className="personagemBombEspecial">

        <div className="bombEspecialImagem">

          <span className="bombEspecialFundo">
            BOMB
          </span>

          <div className="bombEspecialCirculo">

            <Image
              src="/img/bomb.png"
              alt="Bomb de Angry Birds"
              width={650}
              height={650}
              className="bombEspecialPNG"
            />

          </div>

        </div>


        <div className="bombEspecialTexto">

          <span>
            03 / PERSONAGEM PRINCIPAL
          </span>

          <h2>
            BOMB.
          </h2>

          <h3>
            O explosivo
            <br />
            do bando.
          </h3>

          <p>
            Bomb é o grande destaque deste projeto. Seu visual preto,
            sobrancelhas vermelhas e pavio tornam o personagem
            imediatamente reconhecível.
          </p>

          <p>
            E existe outro motivo para ele ocupar um espaço especial:
            foi justamente o personagem escolhido para o meu cosplay.
          </p>

          <Link
            href="/bomb"
            className="botaoBombEspecial"
          >
            Conhecer o Bomb →
          </Link>

        </div>

      </section>


      {/* ========================================
          MATILDA
      ======================================== */}
      <section className="personagemLinha personagemMatilda">

        <div className="personagemLinhaImagem">

          <span className="personagemFundoNumero">
            04
          </span>

          <Image
            src="/img/Matilda.png"
            alt="Matilda de Angry Birds"
            width={600}
            height={600}
            className="personagemPNG"
          />

        </div>


        <div className="personagemLinhaTexto">

          <span className="personagemCategoria">
            04 / A IMPREVISÍVEL
          </span>

          <h2>
            MATILDA
          </h2>

          <h3>
            Tranquilidade...
            <br />
            na maior parte do tempo.
          </h3>

          <p>
            Matilda possui um visual muito diferente de Red,
            Chuck e Bomb, trazendo outra personalidade para o grupo.
          </p>

          <p>
            Sua aparência clara cria um contraste interessante
            com os personagens de cores mais intensas.
          </p>

          <div className="personagemTags tagsEscuras">
            <span>CALMA</span>
            <span>PERSONALIDADE</span>
            <span>SURPRESA</span>
          </div>

        </div>

      </section>


      {/* ========================================
          TERENCE
      ======================================== */}
      <section className="personagemLinha personagemTerence">

        <div className="personagemLinhaTexto">

          <span className="personagemCategoria">
            05 / A FORÇA
          </span>

          <h2>
            TERENCE
          </h2>

          <h3>
            Poucas palavras.
            <br />
            Muita presença.
          </h3>

          <p>
            Terence lembra Red visualmente, mas seu tamanho
            deixa claro que estamos falando de outro nível de força.
          </p>

          <p>
            Ele costuma se destacar justamente por não precisar
            fazer muito para chamar atenção.
          </p>

          <div className="personagemTags">
            <span>FORÇA</span>
            <span>SILÊNCIO</span>
            <span>PRESENÇA</span>
          </div>

        </div>


        <div className="personagemLinhaImagem">

          <span className="personagemFundoNumero">
            05
          </span>

          <Image
            src="/img/Terence.png"
            alt="Terence de Angry Birds"
            width={600}
            height={600}
            className="personagemPNG personagemTerencePNG"
          />

        </div>

      </section>


      {/* ========================================
          BLUES
      ======================================== */}
      <section className="personagemLinha personagemBlues">

        <div className="personagemLinhaImagem">

          <span className="personagemFundoNumero">
            06
          </span>

          <Image
            src="/img/Blues.png"
            alt="The Blues de Angry Birds"
            width={600}
            height={600}
            className="personagemPNG"
          />

        </div>


        <div className="personagemLinhaTexto">

          <span className="personagemCategoria">
            06 / O TRIO
          </span>

          <h2>
            THE
            <br />
            BLUES
          </h2>

          <h3>
            Três pelo preço de um.
          </h3>

          <p>
            Jay, Jake e Jim formam o trio conhecido como The Blues.
          </p>

          <p>
            Pequenos individualmente, eles se diferenciam dos outros
            pássaros justamente por atuarem como um trio.
          </p>

          <div className="personagemTags">
            <span>TRIO</span>
            <span>AGILIDADE</span>
            <span>TRABALHO EM EQUIPE</span>
          </div>

        </div>

      </section>


      {/* ========================================
          FINAL
      ======================================== */}
      <section className="personagensFinal">

        <span>
          MAS UM DELES VIROU REALIDADE...
        </span>

        <h2>
          Do jogo
          <br />
          para o cosplay.
        </h2>

        <p>
          Depois de conhecer o bando, veja como Bomb
          foi transformado em um cosplay para este projeto.
        </p>

        <Link
          href="/fotos"
          className="botaoPersonagensFinal"
        >
          Ver meu cosplay →
        </Link>

      </section>

    </main>
  );
}