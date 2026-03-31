import Layout from '../components/Layout'
import './sobre.css'

export default function Sobre() {
  return (
    <Layout>
      <section className="sobre-wrapper">
        <div className="sobre-container">
          <span className="sobre-badge">Nossa história</span>
          <h2>Sobre nossa empresa</h2>
          <p>
            O Pastelão do Sesi nasceu com uma proposta simples: servir comida com
            sabor de verdade, visual apetitoso e atendimento acolhedor. Nosso foco
            está na qualidade dos ingredientes, na padronização do preparo e em uma
            experiência que faça o cliente querer voltar.
          </p>
          <p>
            Trabalhamos com receitas que valorizam massa crocante, recheios bem
            servidos e combinações que agradam tanto quem prefere o tradicional quanto
            quem busca sabores mais marcantes.
          </p>
        </div>
      </section>
    </Layout>
  )
}
