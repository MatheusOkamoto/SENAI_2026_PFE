prompt = require('prompt-sync')();

//exercício 01
let nome = prompt("Digite seu nome: ");
console.log("Olá, " + nome + "!"); 

//exercício 02
let a = Number(prompt("Digite o primeiro número para somar: "));
let b = Number(prompt("Digite o segundo número para somar: "));
let soma = a + b;
console.log("A soma de " + a + " e " + b + " é: " + soma);

//exercício 03
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
console.log("A média das notas é: " + ((nota1 + nota2 + nota3) / 3));

//exercício 04
let numeroParouImpar = Number(prompt("Digite um número para verificar se é par ou ímpar: "));
if (numeroParouImpar % 2 === 0) {
    console.log("O número " + numeroParouImpar + " é par.");
} else {
    console.log("O número " + numeroParouImpar + " é ímpar.");
}

//exercício 05
let primeironumero = Number(prompt("Digite o primeiro número para comparar: "));
let segundonumero = Number(prompt("Digite o segundo número para comparar: "));
if (primeironumero === 0 && segundonumero === 0) {
    console.log("Ambos os números são zero.");
} else if (primeironumero === 0) {
    console.log("O primeiro número é zero");
} else if (segundonumero === 0) {
    console.log("O segundo número é zero");
} else if (primeironumero > segundonumero) {
    console.log("O maior número é: " + primeironumero);
} else if (segundonumero > primeironumero) {
    console.log("O maior número é: " + segundonumero);
} else {
    console.log("Os números são iguais.");
}

//exercício 06
function verificaIdade(idade) {
    if (idade <12) {
        console.log("Você é uma criança.");
    } else if (idade >= 12 && idade < 18) {
        console.log("Você é um adolescente.");
    } else if (idade >= 18) {
        console.log("Você é um adulto.");
    } else if (idade >= 60) {
        console.log("Você é um idoso.");
    }
}

let idade = Number(prompt("Digite sua idade: "));
verificaIdade(idade);

//exercício 07
function calcularOperacoes(numero1, numero2, operacao) {
    if (operacao === '+') {
        return numero1 + numero2;
    } else if (operacao === '-') {
        return numero1 - numero2;
    } else if (operacao === '*') {
        return numero1 * numero2;
    } else if (operacao === '/') {
        return numero1 / numero2;
    }
}

let numero1 = Number(prompt("Digite um número para realizar uma operação: "));
let numero2 = Number(prompt("Digite outro número para realizar a operação: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");
console.log("O resultado da operação é: " + calcularOperacoes(numero1, numero2, operacao));

//exercício 08
function calculaNota (nota) {
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80) {
        return 'B';
    } else if (nota >= 70) {
        return 'C';
    } else if (nota >= 60) {
        return 'D';
    } else if (nota < 60) {
        return 'F';
    }
}

let nota = Number(prompt("Digite a nota do aluno (0-100): "));
console.log("A nota do aluno é: " + calculaNota(nota));

//exercício 09
function calculaDesconto (precoProduto, cupomDesconto) {
    if (cupomDesconto === "BRONZE"){
        return console.log ("Você obteve um desconto de: R$" + 0.05 * precoProduto + "\nO preço total fica: R$" + (precoProduto - (0.05 * precoProduto)));
    } else if (cupomDesconto === "PRATA"){
        return console.log ("Você obteve um desconto de: R$" + 0.10 * precoProduto + "\nO preço total fica: R$" + (precoProduto - (0.10 * precoProduto)));
    } else if (cupomDesconto === "OURO"){
        return console.log ("Você obteve um desconto de: R$" + 0.15 * precoProduto + "\nO preço total fica: R$" + (precoProduto - (0.15 * precoProduto)));
    } else {
        return console.log("Cupom inválido, sem desconto")
    }
    }

let precoProduto = Number(prompt("Digite o preço do produto: R$"));
let cupomDesconto = (prompt("Digite o cupom de desconto: "));

calculaDesconto(precoProduto, cupomDesconto);

//exercício 10
function calculaIMC (peso, altura) {
    let imc = peso / (altura ** 2);
    console.log("Seu IMC é: " + imc)
    if (imc < 18.5) {
        return "Abaixo do peso";
    }  else if (imc >= 18.5 && imc < 25) {
        return "Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30) {
        return "Obesidade";
    }
}

let peso = Number(prompt("Digite seu peso em kg: "));
let altura = Number(prompt("Digite sua altura em metros: "));
console.log("Você está classificado como: " + calculaIMC(peso, altura));