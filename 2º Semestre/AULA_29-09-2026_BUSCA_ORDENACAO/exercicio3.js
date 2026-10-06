const notas = [8, 10, 7, 10, 6, 9, 10, 5];

function contarNotas(grades) {
    let contador = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] === 10) {
            contador++;
        }
    }

    if (contador === 0) {
        console.log('Nenhuma nota 10 encontrada');
    }

    return contador;
}

console.log('Quantidade de notas 10: ' + contarNotas(notas));
