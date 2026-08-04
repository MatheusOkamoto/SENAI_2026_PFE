class Bicicleta{
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }

    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(valor){
        return this.#marca
    }

    setCor(valor){
        this.#cor = valor;
    }
    getCor(valor){
        return this.#cor
    }

    setVelocidadeMaxima(valor){
        if (valor > 35){
            console.log("VELOCIDADE NÃO PERMITIDA!")
        } else {
            this.#velocidadeMaxima = valor;
        }
    }
    getVelocidadeMaxima(valor){
        return this.#velocidadeMaxima
    }
}

const bike = new Bicicleta

bike.setModelo("MTB");
bike.setMarca("Trek");
bike.setCor("Branco");
bike.setVelocidadeMaxima(40)
console.log("O modelo da sua bike é: " + bike.getModelo())
console.log("A marca da sua bike é: " + bike.getMarca())
console.log("A cor da sua bike é: " + bike.getCor())
console.log("A velocidade máxima da sua bike (em km/h) é: " + bike.getVelocidadeMaxima())