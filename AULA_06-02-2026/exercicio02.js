const prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade: ");

function verificaIdade(idade) {
    if (idade >= 16 && idade < 18) {
        console.log("Você pode pegar livros, mas é menor de idade.");
        } else if ( idade >= 18 ) {
            console.log("Você pode pegar livros e é maior de idade.");
        } else {
            console.log("Você não pode pegar livros, pois é menor de 16 anos.");
        }
}

    verificaIdade(idade);