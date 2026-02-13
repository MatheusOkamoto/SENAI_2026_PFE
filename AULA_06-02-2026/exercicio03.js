const prompt = require("prompt-sync")();

let temCracha = prompt("Você possui crachá? (true/false): ").toLowerCase();
let estaDeUniforme = prompt("Você está de uniforme? (true/false): ").toLowerCase();
let ehMonitor = prompt("Você é monitor? (true/false): ").toLowerCase();
let temCadastro = prompt("Você tem cadastro no sistema? (true/false): ").toLowerCase();

function acessoLaboratorio() {
    if ((temCracha == "true" && estaDeUniforme == "true" && temCadastro == "true") || (ehMonitor == "true" && temCadastro == "true")) {
        console.log("Acesso liberado!");
    } else {
        console.log("Acesso negado!");
    }
}

acessoLaboratorio();
