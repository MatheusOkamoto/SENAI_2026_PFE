import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerPrincipal">

        <h2>
          ANGRY<span>BIRDS</span>
        </h2>

        <p>
          Um projeto sobre Angry Birds, seus personagens
          e o pássaro mais explosivo do bando: Bomb.
        </p>

      </div>


      <div className="footerLinks">

        <h3>
          Navegação
        </h3>

        <Link href="/">
          Home
        </Link>

        <Link href="/bomb">
          Bomb
        </Link>

        <Link href="/personagens">
          Personagens
        </Link>

        <Link href="/fotos">
          Cosplay
        </Link>

        <Link href="/sobre">
          Sobre
        </Link>

      </div>


      <div className="footerProjeto">

        <h3>
          Projeto
        </h3>

        <p>
          Desenvolvido com Next.js
          para atividade acadêmica.
        </p>

      </div>

    </footer>
  );
}