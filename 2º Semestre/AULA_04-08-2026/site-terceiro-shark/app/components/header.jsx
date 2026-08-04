import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo">
          Terceiro <span>Shark</span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link href="/sobre" className="nav-link">
                Sobre
              </Link>
            </li>

            <li>
              <Link href="/fotos" className="nav-link">
                Fotos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}