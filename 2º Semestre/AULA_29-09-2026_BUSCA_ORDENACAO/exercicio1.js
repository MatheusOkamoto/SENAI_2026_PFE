    const numeros = [10, 25, 30, 45, 50];

    function buscarIndice(numbers, numero) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === numero) {
                return i;
            }
        }

        return -1;
    }

    console.log(buscarIndice(numeros, 30)); // 2
    console.log(buscarIndice(numeros, 99)); // -1
