const alunos = [
    { numero: 4, nome: 'Ana Alfreda' },
    { numero: 5, nome: 'Alfredo' },
    { numero: 3, nome: 'Malta' },
    { numero: 7, nome: 'Brian' },
    { numero: 2, nome: 'Sueny' }
];

function ordenarAlunos(students) {
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students.length - 1; j++) {
            if (students[j].numero > students[j + 1].numero) {
                let temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }
        }
    }

    return students;
}

console.log(ordenarAlunos(alunos));
