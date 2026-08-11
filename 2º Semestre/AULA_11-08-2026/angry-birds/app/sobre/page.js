import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <main>

      {/* ========================================
          HERO
      ======================================== */}
      <section className="sobreHero">

        <div className="sobreHeroTexto">

          <span>
            SOBRE O PROJETO
          </span>

          <h1>
            POR QUE
            <br />
            ANGRY
            <br />
            <strong>BIRDS?</strong>
          </h1>

          <p>
            Este site foi desenvolvido como um projeto acadêmico
            inspirado no formato visual de blogs, mas com um tema
            que pudesse receber uma identidade própria.
          </p>

        </div>


        <div className="sobreHeroImagem">

          <Image
            src="/img/angry-birds-grupo.jpg"
            alt="Personagens de Angry Birds"
            width={1000}
            height={700}
            className="sobreGrupoImagem"
            priority
          />

          <div className="sobreHeroEtiqueta">
            MEU
            <br />
            PROJETO
          </div>

        </div>

      </section>


      {/* ========================================
          A IDEIA
      ======================================== */}
      <section className="sobreIdeia">

        <div className="sobreNumero">
          01
        </div>


        <div className="sobreIdeiaTexto">

          <span>
            A IDEIA
          </span>

          <h2>
            Um blog que não
            <br />
            parecesse genérico.
          </h2>

          <p>
            A proposta inicial era desenvolver um blog completo.
            Em vez de criar apenas uma página com textos e notícias,
            escolhi transformar o projeto em um site temático
            sobre Angry Birds.
          </p>

          <p>
            Isso permitiu trabalhar com uma identidade visual
            muito mais definida, utilizando principalmente
            preto, vermelho, amarelo e tons claros.
          </p>

        </div>

      </section>


      {/* ========================================
          POR QUE BOMB
      ======================================== */}
      <section className="sobreBomb">

        <div className="sobreBombFoto">

          <Image
            src="/img/bomb-cosplay.jpg"
            alt="Meu cosplay inspirado no Bomb"
            width={1280}
            height={720}
            className="sobreCosplayImagem"
          />

          <span className="sobreFotoLegenda">
            COSPLAY / BOMB
          </span>

        </div>


        <div className="sobreBombTexto">

          <span>
            PERSONAGEM PRINCIPAL
          </span>

          <h2>
            E por que
            <br />
            o Bomb?
          </h2>

          <p>
            Bomb acabou se tornando o personagem central do site
            porque possui uma identidade visual muito forte.
          </p>

          <p>
            O corpo preto, as sobrancelhas vermelhas, o pavio
            e o grande bico tornam o personagem fácil de reconhecer.
          </p>

          <p>
            Além disso, escolhi representar Bomb com um cosplay,
            fazendo com que o projeto tivesse também um elemento
            pessoal em vez de utilizar apenas imagens dos personagens.
          </p>

          <Link
            href="/fotos"
            className="sobreLink"
          >
            Ver o cosplay →
          </Link>

        </div>

      </section>


      {/* ========================================
          COMO O SITE FOI FEITO
      ======================================== */}
      <section className="sobreTecnologia">

        <div className="sobreTecnologiaTitulo">

          <span>
            DESENVOLVIMENTO
          </span>

          <h2>
            Como o site
            <br />
            foi construído.
          </h2>

        </div>


        <div className="tecnologiasGrid">

          <div className="tecnologiaCard">

            <span>
              01
            </span>

            <h3>
              Next.js
            </h3>

            <p>
              É a estrutura principal do projeto.
              As páginas são organizadas dentro da pasta app.
            </p>

          </div>


          <div className="tecnologiaCard">

            <span>
              02
            </span>

            <h3>
              React
            </h3>

            <p>
              Cada página e componente é criado como uma função
              que retorna os elementos exibidos na tela.
            </p>

          </div>


          <div className="tecnologiaCard">

            <span>
              03
            </span>

            <h3>
              CSS
            </h3>

            <p>
              Controla cores, tamanhos, posicionamento,
              responsividade e toda a identidade visual do site.
            </p>

          </div>


          <div className="tecnologiaCard">

            <span>
              04
            </span>

            <h3>
              Components
            </h3>

            <p>
              Header e Footer foram separados em componentes
              para que possam aparecer em todas as páginas
              sem repetir o mesmo código.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          ESTRUTURA DO PROJETO
      ======================================== */}
      <section className="sobreEstrutura">

        <div className="sobreEstruturaTexto">

          <span>
            ORGANIZAÇÃO
          </span>

          <h2>
            Cada pasta
            <br />
            tem uma função.
          </h2>

          <p>
            O projeto utiliza o App Router do Next.js.
            Quando uma pasta possui um arquivo page.js,
            ela pode representar uma página do site.
          </p>

        </div>


        <div className="estruturaCodigo">

          <div>
            <span>app/</span>
          </div>

          <div className="estruturaNivel1">
            <span>bomb/</span>
            <strong>→ página do Bomb</strong>
          </div>

          <div className="estruturaNivel1">
            <span>personagens/</span>
            <strong>→ página do bando</strong>
          </div>

          <div className="estruturaNivel1">
            <span>fotos/</span>
            <strong>→ página do cosplay</strong>
          </div>

          <div className="estruturaNivel1">
            <span>sobre/</span>
            <strong>→ esta página</strong>
          </div>

          <div className="estruturaNivel1">
            <span>components/</span>
            <strong>→ Header e Footer</strong>
          </div>

          <div>
            <span>public/img/</span>
            <strong>→ imagens do projeto</strong>
          </div>

        </div>

      </section>


      {/* ========================================
          USO DE IA
      ======================================== */}
      <section className="sobreIA">

        <div className="sobreIANumero">
          AI
        </div>


        <div className="sobreIATexto">

          <span>
            INTELIGÊNCIA ARTIFICIAL
          </span>

          <h2>
            Ferramenta,
            <br />
            não piloto automático.
          </h2>

          <p>
            A inteligência artificial foi utilizada como apoio
            durante o desenvolvimento, principalmente para discutir
            estrutura, organização visual e possíveis soluções
            de código.
          </p>

          <p>
            O projeto foi montado por etapas, permitindo testar
            as páginas, identificar erros e entender o funcionamento
            de cada parte antes de continuar.
          </p>

          <p className="sobreIADestaque">
            O importante não é apenas ter um código funcionando.
            É conseguir explicar o que ele está fazendo.
          </p>

        </div>

      </section>


      {/* ========================================
          FINAL
      ======================================== */}
      <section className="sobreFinal">

        <span>
          ANGRY BIRDS / 2026
        </span>

        <h2>
          Projeto terminado.
          <br />
          Bomb aprovado.
        </h2>

        <div className="sobreFinalLinks">

          <Link
            href="/bomb"
            className="botaoPrincipal"
          >
            Conhecer o Bomb
          </Link>

          <Link
            href="/"
            className="botaoSobreSecundario"
          >
            Voltar para Home
          </Link>

        </div>

      </section>

    </main>
  );
}