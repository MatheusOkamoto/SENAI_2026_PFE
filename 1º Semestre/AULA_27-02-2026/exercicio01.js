class Produto {
    nome;
    preco;
    estoque;

    constructor(nome, preco, estoque){
        this.nome = nome;
        if (preco >= 0 && estoque >= 0){
        this.preco = preco;
        this.estoque = estoque;
        } else {
            return 'Preço e/ou estoque inválidos!'
        }
    }

    valorEmEstoque(){
        return this.preco * this.estoque
    }
    
    aplicarDesconto(percentual){
        return this.preco = this.preco - ((percentual/100) * this.preco)
    }

    mostrar(){
        console.log("Nome: " + this.nome);
        console.log("Preço por kg: R$" + this.preco);
        console.log("Estoque: " + this.estoque);
    }
}

const Cocaina = new Produto ('cocaina',5000, 10);
Cocaina.mostrar();
console.log("O valor total em estoque é de: R$" + Cocaina.valorEmEstoque());
console.log("O preço por kg após o desconto é de: R$" + Cocaina.aplicarDesconto(20));

console.log('');

const Maconha = new Produto ('maconha', 2000, 50);
Maconha.mostrar();
console.log("O valor total em estoque é de: R$" + Maconha.valorEmEstoque());
console.log("O preço por kg após o desconto é de: R$" + Maconha.aplicarDesconto(20))

if (Cocaina.valorEmEstoque() > Maconha.valorEmEstoque()){
    console.log("O valor em estoque da " + Cocaina.nome + " é maior.");
} else if (Cocaina.valorEmEstoque() < Maconha.valorEmEstoque()){
    console.log("O valor em estoque da " + Maconha.nome + " é maior.");
} else {
    console.log("Os dois produtos têm o mesmo valor em estoque.");
}