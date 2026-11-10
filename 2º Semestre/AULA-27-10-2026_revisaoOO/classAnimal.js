class Animal {
    classificacao;
    especie;
    tamanho;
    nomeCientifico;

    alimentar(qtde){
        console.log(`O animal foi alimentado com ${qtde} kg de comida.`);
    }
    classificar(classe){
        this.classificacao = classe;
    }
}

let cachorro = new Animal();
cachorro.classificar("quadrupede");
cachorro.especie = 'Vira-lata';
cachorro.tamanho = 'Pequeno';
cachorro.nomeCientifico = 'Viraslatus Caramelus';
cachorro.alimentar('0.5');

console.log(cachorro);