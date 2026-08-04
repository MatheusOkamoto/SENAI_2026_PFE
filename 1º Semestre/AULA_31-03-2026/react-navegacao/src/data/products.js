export const products = [
  {
    id: 'pastel-frango-catupiry',
    name: 'Pastel de Frango com Catupiry',
    shortDescription: 'Pastel frito brasileiro, dourado e crocante, com frango desfiado e queijo bem cremoso.',
    description:
      'Um clássico de pastelaria brasileira: massa frita, sequinha por fora e recheio generoso de frango desfiado com catupiry. É o tipo de pastel que lembra feira, lanche caprichado e produto feito na hora.',
    price: 'R$ 18,90',
    category: 'Clássico brasileiro',
    weight: '420 g',
    serves: '1 a 2 pessoas',
    highlight: 'Massa crocante e recheio cremoso',
    ingredients: ['Frango desfiado', 'Catupiry', 'Muçarela', 'Milho', 'Massa de pastel frita'],
    images: [
      '/mock/pastel-frango-1.jpg',
      '/mock/pastel-frango-2.jpg',
      '/mock/pastel-frango-3.jpg',
    ],
  },
  {
    id: 'pastel-carne-queijo',
    name: 'Pastel de Carne com Queijo',
    shortDescription: 'Pastel frito brasileiro com carne bem temperada, recheio marcante e massa dourada de verdade.',
    description:
      'Feito no estilo tradicional de pastelaria, com carne moída refogada, tempero equilibrado e queijo derretendo por dentro. A proposta aqui é mostrar um pastel frito brasileiro de verdade, não um salgado genérico.',
    price: 'R$ 19,90',
    category: 'Sabor tradicional',
    weight: '450 g',
    serves: '1 a 2 pessoas',
    highlight: 'Recheio generoso e bem temperado',
    ingredients: ['Carne moída', 'Queijo muçarela', 'Cebola', 'Cheiro-verde', 'Massa de pastel frita'],
    images: [
      '/mock/pastel-carne-1.jpg',
      '/mock/pastel-carne-2.jpg',
      '/mock/pastel-carne-3.jpg',
    ],
  },
  {
    id: 'pastel-calabresa-queijo',
    name: 'Pastel de Calabresa com Queijo',
    shortDescription: 'Uma combinação bem brasileira: calabresa, queijo e massa frita crocante.',
    description:
      'Esse aqui puxa mais para o sabor intenso de lanchonete e feira: calabresa em tiras, queijo derretido e massa bem fritinha. Visualmente e no texto, ele agora conversa com a ideia de pastel brasileiro de verdade.',
    price: 'R$ 17,90',
    category: 'Recheio intenso',
    weight: '400 g',
    serves: '1 pessoa',
    highlight: 'Sabor forte e textura crocante',
    ingredients: ['Calabresa', 'Queijo muçarela', 'Cebola', 'Orégano', 'Massa de pastel frita'],
    images: [
      '/mock/pastel-calabresa-1.jpg',
      '/mock/pastel-calabresa-2.jpg',
      '/mock/pastel-calabresa-3.jpg',
    ],
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}
