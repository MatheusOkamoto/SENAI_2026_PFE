let fila = ["A", "B", "C", "D"];
let auxiliar = [];

console.log("Fila original:", fila);

while (fila.length > 0) {
    auxiliar.push(fila.shift());
}

while (auxiliar.length > 0) {
    fila.push(auxiliar.pop());
}

console.log("Fila invertida:", fila);