const numeros = [8, 5, 3, 9, 1, 4];

function ordenarNumeros(numbers) {
    let contador = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;

                contador++;
            }
        }
    }

    console.log('Quantidade de trocas: ' + contador);

    return numbers;
}

console.log('Números ordenados: ' + ordenarNumeros(numeros));
