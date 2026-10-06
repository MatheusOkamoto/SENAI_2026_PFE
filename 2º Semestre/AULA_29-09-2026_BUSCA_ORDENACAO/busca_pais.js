const paises = ['Uzbequistão','Groenlandia', 'Paquistão', 'Angola', 'Bahrein', 'Cabo Verde', 'França', 'Islandia', 'Honduras'];

function buscaPais(countries, country){
    for(let i =0; i < countries.length; i++){
        if(countries[i] === country){
            console.log(`País ${countries[i]} encontrado na posição ${i}`);
            return; //finaliza execução do programa
} 
    }
    console.log("País inexistente");
}

buscaPais(paises, 'França');