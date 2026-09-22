let nomes = ["Ana", "João", "Pedro", "Maria", "Lucas"];

console.log("Fila inicial:", nomes);

function removerNome() {

    if (nomes.length > 0) {
        console.log("Removido:", nomes.shift());
    } else {
        console.log("A fila está vazia");
    }

}

removerNome();

console.log("Fila após remoção:", nomes);