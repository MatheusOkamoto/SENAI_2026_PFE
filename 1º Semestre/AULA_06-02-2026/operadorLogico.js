let idade = 14;
let salario = 1000;

//     false          false         false
if (idade >= 16 && idade >=18 && salario == 0 ) {
    console.log("Teste")
}

//      false          false        true
if (idade >= 16 || idade >=18 || salario > 0 ) {
    console.log("Teste")
}

//      false          true          false
if (idade >= 16 || !idade >=18 || salario == 0 ) {
    console.log("Teste")
}