import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import { getProductById } from '../../data/products'
import './produto.css'

export default function Produto() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <Layout>
        <section className="produto-page produto-notfound">
          <h2>Produto não encontrado</h2>
          <p>O item selecionado não existe ou foi removido do cardápio.</p>
          <Link to="/galeria">Voltar para a galeria</Link>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="produto-page">
        <div className="produto-hero">
          <div className="produto-imagem-principal">
            <img src={product.images[0]} alt={product.name} />
          </div>

          <div className="produto-info">
            <span className="produto-badge">Nova tela de detalhes</span>
            <h2>{product.name}</h2>
            <p className="produto-descricao">{product.description}</p>

            <div className="produto-preco-box">
              <strong>{product.price}</strong>
              <span>{product.highlight}</span>
            </div>

            <div className="produto-detalhes-grid">
              <div>
                <p className="label">Categoria</p>
                <p>{product.category}</p>
              </div>
              <div>
                <p className="label">Peso médio</p>
                <p>{product.weight}</p>
              </div>
              <div>
                <p className="label">Serve</p>
                <p>{product.serves}</p>
              </div>
            </div>

            <div className="produto-acoes">
              <Link to="/galeria" className="produto-botao secundario">
                Ver mais fotos
              </Link>
              <a href="#ingredientes" className="produto-botao primario">
                Ver ingredientes
              </a>
            </div>
          </div>
        </div>

        <div className="produto-extra-grid">
          <section className="produto-card" id="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="produto-card">
            <h3>Mais fotos do produto</h3>
            <div className="produto-mini-galeria">
              {product.images.map((image, index) => (
                <img
                  key={`${product.id}-${index}`}
                  src={image}
                  alt={`${product.name} - detalhe ${index + 1}`}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}
