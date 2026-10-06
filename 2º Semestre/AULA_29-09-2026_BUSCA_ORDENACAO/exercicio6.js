const idades = [20, 17, 18, 19, 16, 11, 14, 13, 12, 15, 10];

function ordenarIdades(ages) {
    for (let i = 0; i < ages.length; i++) {
        for (let j = 0; j < ages.length - 1; j++) {
            if (ages[j] > ages[j + 1]) {
                let temp = ages[j];
                ages[j] = ages[j + 1];
                ages[j + 1] = temp;
            }
        }
    }

    return ages;
}

console.log('Antes: ' + idades);
console.log('Depois: ' + ordenarIdades(idades));
