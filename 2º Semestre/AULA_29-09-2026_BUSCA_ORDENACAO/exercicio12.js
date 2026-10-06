const salarios = [10000, 6000, 19000, 4000, 3000];

function ordenarSalarios(salaries) {
    for (let i = 0; i < salaries.length - 1; i++) {
        let maior = i;

        for (let j = i + 1; j < salaries.length; j++) {
            if (salaries[j] > salaries[maior]) {
                maior = j;
            }
        }

        let temp = salaries[i];
        salaries[i] = salaries[maior];
        salaries[maior] = temp;
    }

    return salaries;
}

console.log(ordenarSalarios(salarios));
