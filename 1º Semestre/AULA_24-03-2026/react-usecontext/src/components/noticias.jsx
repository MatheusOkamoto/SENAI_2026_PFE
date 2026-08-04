const noticias = [
  {
    id: 1,
    titulo: "Tecnologia na educação",
    texto:
      "Novas ferramentas digitais estão ajudando alunos a aprender de forma mais prática.",
    imagem:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    titulo: "Feira de ciências",
    texto:
      "Escolas da região participaram de uma feira com projetos criativos e educativos.",
    imagem:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    titulo: "Mercado de trabalho",
    texto:
      "Cursos de programação continuam ganhando destaque entre os jovens.",
    imagem:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

function Noticias() {
  return (
    <section className="noticias">
      <h2>Últimas notícias</h2>

      <div className="cards">
        {noticias.map((noticia) => (
          <div className="card" key={noticia.id}>
            <img src={noticia.imagem} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;