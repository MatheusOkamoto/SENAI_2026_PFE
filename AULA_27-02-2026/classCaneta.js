class Caneta {
    cor = 'amarela';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdTinta = 10; //ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }

    sublinhar(valor){
        if (valor > this.qtdTinta){
            return'Quantidade de tinta insuficiente para sublinhar';
        } else {
            this.qtdTinta -= valor;
            return 'A quantidade restante depois de sulbinhar é ' + this.qtdTinta;
        }
    }

    recarregar(valor){
        if (valor + this.qtdTinta > 15){
            return 'Não é possível recarregar, a caneta estorará!'
        } else {
            this.qtdTinta += valor
            return 'A quantidade de tinta depois de recarregar é ' + this.qtdTinta
        }
    }

    getQtdTinta(){
        return this.qtdTinta
    }
}

const canetaFina = new Caneta();
console.log(canetaFina.escrever());
console.log(canetaFina.escrever());
console.log('A qtde. restante de tinta é ' + canetaFina.getQtdTinta());
console.log(canetaFina.sublinhar(2));
console.log(canetaFina.recarregar(9));
