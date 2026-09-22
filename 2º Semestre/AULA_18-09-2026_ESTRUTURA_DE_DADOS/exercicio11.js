let fila = [];

function adicionar(item) {

    if (fila.length < 5) {
        fila.push(item);
    } else {
        console.log("Erro: fila cheia!");
    }

}

adicionar("A");
console.log(fila);
adicionar("B");
console.log(fila);
adicionar("C");
console.log(fila);
adicionar("D");
console.log(fila);
adicionar("E");
console.log(fila);
adicionar("F");

console.log("Fila final:", fila);