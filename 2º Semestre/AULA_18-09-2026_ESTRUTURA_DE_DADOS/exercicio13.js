let carros = ["Toyota", "Honda", "Ford", "Fiat", "Chevrolet", "Volkswagen"];

console.log(carros);

let primeiro = carros.shift();
carros.push(primeiro);
console.log(carros);


let segundo = carros.shift();
carros.push(segundo);
console.log(carros);