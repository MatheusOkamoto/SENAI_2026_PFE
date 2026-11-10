class Conta{
    nome; //atributo público
    #cpf; //atributo privado

    //get e set
    setCpf(cpf){
        this.#cpf = cpf;
}
    getCpf(){
        return this.#cpf;
    }
    mostrar(){
        return `O cliente ${this.nome} possui o CPF ${this.getCpf()}`;
    }
}
let contaPoupanca = new Conta();
contaPoupanca.nome = "Aroldo Gonçalves";
contaPoupanca.setCpf("123.456.789-00");
console.log(contaPoupanca.mostrar());