const temperaturas = [33, 37, 39, 23, 40, 27, 25];

function ordenarTemperaturas(temperatures) {
    for (let i = 0; i < temperatures.length - 1; i++) {
        let menor = i;

        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] < temperatures[menor]) {
                menor = j;
            }
        }

        let temp = temperatures[i];
        temperatures[i] = temperatures[menor];
        temperatures[menor] = temp;
    }

    return temperatures;
}

console.log(ordenarTemperaturas(temperaturas));
