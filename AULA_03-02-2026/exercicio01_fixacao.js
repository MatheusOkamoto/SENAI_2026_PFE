const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

console.log("A soma entre os números escolhidos é: " + soma);
console.log("A subtração entre os números escolhidos é: " + subtracao);
console.log("A multiplicação entre os números escolhidos é: " + multiplicacao);
console.log("A divisão entre os números escolhidos é: " + divisao);