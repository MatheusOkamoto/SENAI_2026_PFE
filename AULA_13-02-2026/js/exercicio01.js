const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao');

titulo.textContent = "Título Maneiro!!!";

container.style.backgroundColor = "#7dc7cc";
container.style.width = '94%';
container.style.margin = '0 auto';

let texto1 = "<h2>Programação Front-End</h2>";
container.innerHTML += texto1;

let imagem = '<img src="./img/pica_pau.jpg" alt="Imagem do Pica Pau">';
container.innerHTML += imagem;

let contador = 0;
botao.addEventListener('click',() =>{
    alert('Você clicou no botão ' + contador + ' vezes')
    contador++
});