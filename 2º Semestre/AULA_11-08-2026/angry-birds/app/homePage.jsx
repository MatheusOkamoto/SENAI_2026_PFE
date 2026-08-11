import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      {/* ========================================
          BANNER PRINCIPAL
      ======================================== */}
      <section className="hero">

        <div className="heroTexto">

          <span className="heroCategoria">
            ANGRY BIRDS
          </span>

          <h1>
            Nem todo pássaro
            <br />
            nasceu para ficar
            <br />
            <span>calmo.</span>
          </h1>

          <p>
            Um projeto sobre o universo de Angry Birds,
            seus personagens e, principalmente, Bomb:
            o pássaro mais explosivo do bando.
          </p>

          <div className="heroBotoes">

            <Link href="/bomb" className="botaoPrincipal">
              Conhecer o Bomb
            </Link>

            <Link href="/fotos" className="botaoSecundario">
              Ver meu cosplay
            </Link>

          </div>

        </div>


        <div className="heroFoto">

          <div className="fotoMoldura">

            <Image
              src="/img/angry-birds-grupo.jpg"
              alt="Personagens de Angry Birds"
              width={900}
              height={650}
              className="fotoGrupo"
              priority
            />

          </div>

          <div className="etiquetaBomb">
            ANGRY
            <br />
            BIRDS
          </div>

        </div>

      </section>


      {/* ========================================
          FAIXA DOS PERSONAGENS
      ======================================== */}
      <section className="faixaBomb">

        <p>
          RED
          <span>•</span>
          CHUCK
          <span>•</span>
          BOMB
          <span>•</span>
          MATILDA
          <span>•</span>
          TERENCE
        </p>

      </section>


      {/* ========================================
          SOBRE ANGRY BIRDS
      ======================================== */}
      <section className="secao">

        <div className="tituloSecao">

          <span>O UNIVERSO</span>

          <h2>
            Muito mais que pássaros contra porcos.
          </h2>

        </div>


        <div className="textoDuasColunas">

          <p>
            Angry Birds apresenta um grupo de pássaros com
            personalidades e habilidades completamente diferentes,
            unidos principalmente pela rivalidade contra os porcos.
          </p>

          <p>
            Red, Chuck, Bomb, Matilda, Terence e os outros integrantes
            do bando transformam uma ideia simples em um universo
            cheio de personagens reconhecíveis e situações caóticas.
          </p>

        </div>

      </section>


      {/* ========================================
          DESTAQUE DO BOMB
      ======================================== */}
      <section className="bombDestaque">

        <div className="bombImagem">

          <div className="circuloBomb">

            <Image
              src="/img/bomb.png"
              alt="Bomb de Angry Birds"
              width={600}
              height={600}
              className="bombPNG"
            />

          </div>

        </div>


        <div className="bombConteudo">

          <span className="bombMiniTitulo">
            PERSONAGEM EM DESTAQUE
          </span>

          <h2>
            Bomb.
          </h2>

          <p className="bombFrase">
            Silencioso por alguns segundos.
            <br />
            Explosivo logo depois.
          </p>

          <p>
            Bomb é um dos personagens mais marcantes de Angry Birds.
            Seu corpo preto, as sobrancelhas vermelhas e o pavio
            no topo da cabeça deixam claro que tranquilidade
            não é exatamente sua principal característica.
          </p>

          <Link href="/bomb" className="linkBomb">
            Tudo sobre o Bomb →
          </Link>

        </div>

      </section>


      {/* ========================================
          MEU COSPLAY
      ======================================== */}
      <section className="cosplayHome">

        <div className="cosplayImagem">

          <Image
            src="/img/bomb-cosplay.jpg"
            alt="Meu cosplay inspirado no Bomb de Angry Birds"
            width={1280}
            height={720}
            className="fotoCosplayGrande"
          />

          <div className="cosplayLegenda">
            MEU COSPLAY — BOMB
          </div>

        </div>


        <div className="cosplayTexto">

          <span>
            DO JOGO PARA A VIDA REAL
          </span>

          <h2>
            Eu virei
            <br />
            o Bomb.
          </h2>

          <p>
            Para este projeto, eu não queria apenas colocar
            informações sobre Angry Birds em uma página.
          </p>

          <p>
            Resolvi representar justamente o personagem que
            escolhi como principal destaque do site.
          </p>

          <p>
            O cosplay utiliza algumas das características mais
            reconhecíveis do Bomb: a cabeça preta, as grandes
            sobrancelhas vermelhas, o pavio e o enorme bico.
          </p>

          <Link href="/fotos" className="botaoCosplay">
            Ver fotos do cosplay →
          </Link>

        </div>

      </section>


      {/* ========================================
          PERSONAGENS
      ======================================== */}
      <section className="secao personagensHome">

        <div className="tituloSecao">

          <span>CONHEÇA O BANDO</span>

          <h2>
            Cada pássaro tem seu jeito.
          </h2>

        </div>


        <div className="personagensGrid">

          <div className="personagemCard redCard">

            <div className="personagemNumero">
              01
            </div>

            <h3>
              Red
            </h3>

            <p>
              O líder mais temperamental do bando.
            </p>

          </div>


          <div className="personagemCard chuckCard">

            <div className="personagemNumero">
              02
            </div>

            <h3>
              Chuck
            </h3>

            <p>
              Rápido, inquieto e praticamente impossível de acompanhar.
            </p>

          </div>


          <div className="personagemCard bombCard">

            <div className="personagemNumero">
              03
            </div>

            <h3>
              Bomb
            </h3>

            <p>
              Quando perde o controle, todo mundo percebe.
            </p>

          </div>


          <div className="personagemCard terenceCard">

            <div className="personagemNumero">
              04
            </div>

            <h3>
              Terence
            </h3>

            <p>
              Poucas palavras. Muita força.
            </p>

          </div>

        </div>


        <Link href="/personagens" className="verTodos">
          Conhecer os personagens →
        </Link>

      </section>

    </main>
  );
}