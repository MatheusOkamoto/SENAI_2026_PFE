const palavras = ['banana', 'maçã', 'melão', 'melancia', 'abacate'];

function ordenarPalavras(words) {
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length - 1; j++) {
            if (words[j].length > words[j + 1].length) {
                let temp = words[j];
                words[j] = words[j + 1];
                words[j + 1] = temp;
            }
        }
    }

    return words;
}

console.log(ordenarPalavras(palavras));
