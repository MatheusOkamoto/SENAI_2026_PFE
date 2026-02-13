//primeiro tipo função padrão
function saudacao(nome, sobrenome) {
    console.log("Olá, seja bem-vindo " + nome + " " + sobrenome + "!");
}

saudacao("Matheus", "Okamoto"); //chamada da função

//seguno tipo - função anônima
const somar  = function(num1, num2) {
    console.log("A soma dos número é : " + (num1 + num2));
}

somar(25,35);

//terceiro tipo - arrow function
const subtrair = (num1, num2) => {
    console.log("A subtração dos número é : " + (num1 - num2));
}

subtrair(30,50);

//terceiro tipo - arrow function
const subtrairComRetorno = (num1, num2) => {
    return (num1 - num2);
}
console.log("A subtração dos numeros é = " + subtrairComRetorno(30,50));

