const produtos = [
    { nomeProduto: 'Arroz', preco: 25 },
    { nomeProduto: 'Feijão', preco: 12 },
    { nomeProduto: 'Leite', preco: 6 },
    { nomeProduto: 'Carne', preco: 40 }
];

function buscarProduto(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].preco < 20) {
            return products[i].nomeProduto;
        }
    }

    return null;
}

console.log(buscarProduto(produtos)); // Feijão
