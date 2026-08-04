let hoje = new Date(hoje.getFullYear(),11, 31)
let hoje1 = hoje.getFullYear() + "-" + hoje.getMonth()+ "-" + hoje.getDate()
console.log(hoje1)
let fimDoAno = new Date(hoje.getFullYear(),11, 31);
console.log(fimDoAno)




// const dataAtual = new Date();
// const fimDoAno = new Date(dataAtual.getFullYear(), 11, 31);
// const diferenca = fimDoAno - dataAtual;
// const diasFaltantes = parseInt(diferenca / (1000 * 60 * 60 * 24));
// console.log("Dias faltantes para o fim do ano: " + diasFaltantes);