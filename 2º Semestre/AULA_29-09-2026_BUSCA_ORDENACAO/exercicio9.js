const carros = [
    { modelo: 'Civic', anoFabricacao: 2020 },
    { modelo: 'Gol', anoFabricacao: 2010 },
    { modelo: 'Corolla', anoFabricacao: 2018 },
    { modelo: 'Fusca', anoFabricacao: 1980 },
    { modelo: 'Onix', anoFabricacao: 2023 }
];

function ordenarCarros(cars) {
    for (let i = 0; i < cars.length; i++) {
        for (let j = 0; j < cars.length - 1; j++) {
            if (cars[j].anoFabricacao > cars[j + 1].anoFabricacao) {
                let temp = cars[j];
                cars[j] = cars[j + 1];
                cars[j + 1] = temp;
            }
        }
    }

    return cars;
}

console.log(ordenarCarros(carros));
