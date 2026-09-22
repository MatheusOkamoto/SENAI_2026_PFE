let fila1 = ["A", "B", "C"];
let fila2 = ["D", "E", "F"];

console.log("Fila 1:", fila1);
console.log("Fila 2:", fila2);

let fila3 = [];

console.log("Fila 3:", fila3);

while (fila1.length > 0) {
    fila3.push(fila1.shift());
}

while (fila2.length > 0) {
    fila3.push(fila2.shift());
}

console.log("Fila 3 após combinar:", fila3);