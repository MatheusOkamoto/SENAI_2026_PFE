import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { products } from '../../data/products'
import './galeria.css'

export default function Galeria() {
  return (
    <Layout>
      <section className="galeria-page">
        <div className="galeria-header">
          <span className="galeria-badge">Nova tela</span>
          <h2>Galeria de fotos dos produtos</h2>
          <p>
            Explore os sabores da casa e navegue por fotos de pastéis fritos
            brasileiros antes de escolher o seu.
          </p>
        </div>

        <div className="galeria-produtos">
          {products.map((product) => (
            <article key={product.id} className="galeria-card">
              <div className="galeria-grid">
                {product.images.map((image, index) => (
                  <img
                    key={`${product.id}-${index}`}
                    src={image}
                    alt={`${product.name} - foto ${index + 1}`}
                  />
                ))}
              </div>

              <div className="galeria-info">
                <div>
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                </div>

                <Link to={`/produto/${product.id}`}>Abrir detalhes</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
