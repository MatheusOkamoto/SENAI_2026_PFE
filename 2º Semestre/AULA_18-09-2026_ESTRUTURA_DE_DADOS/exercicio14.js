const prompt = require("prompt-sync")();

let processos = [1, 2, 3, 4, 5];

console.log("Fila de processos:", processos);

while (processos.length > 0) {

    let resposta = prompt("Digite 'executar' para executar o próximo processo ou 'sair' para encerrar: ");

    if (resposta === "executar") {

        let processo = processos.shift();
        console.log("Executando processo:", processo);

    } else if (resposta === "sair") {

        console.log("Programa encerrado.");
        break;

    } else {

        console.log("Opção inválida.");

    }
}

if (processos.length === 0) {
    console.log("Todos os processos foram executados.");
}