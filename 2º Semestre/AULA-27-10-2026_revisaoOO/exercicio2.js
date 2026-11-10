class Bairro {
    nome;
    qtde_habitantes;
    qtde_casas;
    faixa_etaria;
    media_renda_familiar;

    mostrarDados(){
        console.log(`Nome do bairro: ${this.nome}`);
        console.log(`Quantidade de habitantes: ${this.qtde_habitantes}`);
        console.log(`Quantidade de casas: ${this.qtde_casas}`);
        console.log(`Faixa etária: ${this.faixa_etaria}`);
        console.log(`Média da renda familiar: R$ ${this.media_renda_familiar}`);
    }
}

let bairro1 = new Bairro();

bairro1.nome = "Centro";
bairro1.qtde_habitantes = 3500;
bairro1.qtde_casas = 1200;
bairro1.faixa_etaria = "18 a 60 anos";
bairro1.media_renda_familiar = 3500;

bairro1.mostrarDados();