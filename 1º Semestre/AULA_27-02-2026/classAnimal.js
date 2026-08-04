class Animal {
    especie;
    #genero;
    #qtdeIndividuos;
    #nome;

    constructor(especie, genero, qtde, nome) {
        this.especie = especie;
        this.#genero = genero;
        this.#qtdeIndividuos = qtde;
        this.#nome = nome;
    }

     mostrar() {
        console.log("Espécie:", this.especie);
        console.log("Gênero:", this.#genero);
        console.log("Quantidade:", this.#qtdeIndividuos);
        console.log("Nome(s):", this.#nome);
    }

    // setGenero(valor){
    //     this.#genero = valor
    // }
    // getGenero(){
    //     return this.#genero
    // }

    // setQtdeIndividuos(valor){
    //     this.#qtdeIndividuos = valor
    // }
    // getQtdeIndividuos(){
    //     return this.#qtdeIndividuos
    // }

    // setNome(valor){
    //     this.#nome = valor
    // }
    // getNome(){
    //     return this.#nome
    // }
}

const panda = new Animal('urso','fêmea',2,'Peppa e Pig');
panda.mostrar()