class Cidade {
    qtdeHabitantes = 14.877;
    estado = 'SP';
    nome = 'Pacamebu';

    mostrar(){
        console.log("O nome da cidade é: " + this.nome)
        console.log("O estado é: " + this.estado)
        console.log("A quantidade de habitantes é: " + this.qtdeHabitantes)
    }
}

const city = new Cidade
city.nome = "Pacaembu"
city.mostrar();