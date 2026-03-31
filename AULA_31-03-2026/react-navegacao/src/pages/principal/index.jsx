import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { products } from '../../data/products'
import './principal.css'

export default function Principal() {
  const featuredProducts = products.slice(0, 3)

  return (
    <Layout>
      <section className="banner">
        <img src="/mock/pastel-hero-br.jpg" alt="Pastel frito brasileiro dourado e crocante" />

        <div className="texto-banner">
          <span className="badge-destaque">Feito na hora</span>
          <h2>Bem-vindo ao Pastel do Sesi</h2>
          <p>
            Pastéis fritos brasileiros com massa crocante, recheio generoso e visual
            muito mais fiel ao tema do projeto.
          </p>

          <div className="hero-actions">
            <Link to="/galeria" className="botao-primario">
              Ver galeria
            </Link>
            <Link
              to={`/produto/${featuredProducts[0].id}`}
              className="botao-secundario"
            >
              Ver produto em destaque
            </Link>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="section-heading">
          <h3>Nossos destaques</h3>
          <p>Escolha um sabor e veja os detalhes completos.</p>
        </div>

        <div className="cards">
          {featuredProducts.map((product) => (
            <article key={product.id} className="card-produto">
              <img src={product.images[0]} alt={product.name} />
              <div className="card-content">
                <span className="card-tag">{product.category}</span>
                <h4>{product.name}</h4>
                <p>{product.shortDescription}</p>
                <div className="card-meta">
                  <strong>{product.price}</strong>
                  <Link to={`/produto/${product.id}`}>Ver detalhes</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
