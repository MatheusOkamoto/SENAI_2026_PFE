const usuarios = ['Matheus', 'Pedro', 'Ana', 'Lucas', 'Maria'];

function buscarUsuario(users, nome) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].toLowerCase() === nome.toLowerCase()) {
            return true;
        }
    }

    return false;
}

console.log(buscarUsuario(usuarios, 'matheus')); // true
console.log(buscarUsuario(usuarios, 'PEDRO')); // true
console.log(buscarUsuario(usuarios, 'João')); // false
