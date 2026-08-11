import Link from "next/link";

export default function Header() {
  return (
    <header className="header">

      <Link href="/" className="logo">
        ANGRY<span>BIRDS</span>
      </Link>

      <nav className="headerMenu">

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

      </nav>

    </header>
  );
}