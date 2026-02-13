const prompt = require("prompt-sync")();

let pontuacao = prompt("Digite sua pontuação: ");

function avaliarPontuacao(pontuacao) {
  let primeiropasso = pontuacao / 2;
  let segundopasso = primeiropasso ** 2;
  console.log("A sua pontuação final é: " + segundopasso);
}

avaliarPontuacao(pontuacao);
