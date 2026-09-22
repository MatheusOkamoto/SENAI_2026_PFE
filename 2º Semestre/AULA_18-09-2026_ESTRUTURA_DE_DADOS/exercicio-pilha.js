const prompt = require('prompt-sync')();

function historicoTextos(){
    let historico = [];
    let entrada = '';

    console.log("Digite as palavras. Use 'Desfazer' para apagar a última palavra ou 'Sair' para terminar");

    do {
        entrada = prompt("Digite uma palavra: ");

        if (entrada === 'Sair') {
            break;
        } else if (entrada === 'Desfazer') {
            if (historico.length > 0) {
                historico.pop();
                console.log("Última palavra removida. Histórico atual:", historico);
            } else {
                console.log("Não há palavras para desfazer.");
            }
        } else if (entrada !== 'Desfazer' && entrada !== 'Sair') {
            historico.push(entrada);
            console.log("Palavra adicionada. Histórico atual:", historico);
        }
    } while (true);

    console.log("Programa encerrado. Histórico final:", historico);
}

historicoTextos();
