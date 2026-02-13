const prompt = require("prompt-sync")();

let solicitacao = prompt("Digite a data ne seu nascimento (AAAA-MM-DD): ");

let hoje = new Date();
let nascimento = new Date(solicitacao);

let idade = hoje.getFullYear() - nascimento.getFullYear();

let mesAtual = hoje.getMonth() + 1;
let mesNascimento = nascimento.getMonth();

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())
) {
    idade--;
}

console.log("Sua idade é: " + idade)
