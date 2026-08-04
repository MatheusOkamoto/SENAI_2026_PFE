const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao');

container.style.width = "85%";
container.style.margin = "0 auto";

botao.style.backgroundColor = "#ff0000"
botao.style.color = "#ffffff"
botao.style.curor = "pointer"

let imagem = '<img src=./img/Franz_Kafka.jpg alt="Imagem do Franz Kafka">'

botao.addEventListener('click', () =>{
    titulo.textContent = "Very crazy!!!";
    titulo.style.color = "#ff0000";
    container.innerHTML += imagem;
})

