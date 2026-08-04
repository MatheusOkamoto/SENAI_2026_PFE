import { NavLink } from 'react-router-dom'
import './layout.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/galeria', label: 'Galeria' },
]

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <p className="brand-kicker">Sabor, crocância e tradição</p>
          <h1>Pastelão do Sesi</h1>
        </div>

        <nav>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="page-content">{children}</main>

      <footer className="site-footer">
        <p>2026 - Todos os direitos reservados - Pastelão do Sesi</p>
      </footer>
    </div>
  )
}
