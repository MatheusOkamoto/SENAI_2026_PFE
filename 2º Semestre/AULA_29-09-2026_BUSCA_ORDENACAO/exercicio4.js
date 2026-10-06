const contatos = [
    { nome: 'Fulano', telefone: '18982828989' },
    { nome: 'Ciclano', telefone: '11971717171' }
];

function buscarContato(contacts, nome) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nome === nome) {
            return contacts[i].telefone;
        }
    }

    return 'Contato não encontrado';
}

console.log(buscarContato(contatos, 'Fulano'));
console.log(buscarContato(contatos, 'Matheus'));
