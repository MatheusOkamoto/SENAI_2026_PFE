class Tarefa {
    titulo;
    descricao;
    concluida = false;

    // constructor(titulo, descricao) {
    //     this.titulo = titulo;
    //     this.descricao = descricao;
    // }
    criar(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
    }

    concluir() {
        this.concluida = true;
    }

    reabrir() {
        this.concluida = false;
    }
    getTitulo(){
        return this.titulo;
    }
    getDescricao(){
        return this.descricao;
    }
    getConcluida(){
        return this.concluida;
    }
}

class ListaTarefa extends Tarefa{

        adicionar(titulo, descricao){
            super.criar(titulo, descricao)
        }

        mostrar(){
            console.log(`A tarefa ${super.getTitulo()} e descrição ${super.getDescricao()} a tarefa está ${super.getConcluida() ? 'aberta' : 'fechada'}` );
            //if ternário
           // condição 2 > 1 ? 'verdadeiro' : 'false'
        }

        concluir(){
            super.concluir() ;
        }
}
                
const tarefa = new ListaTarefa();
tarefa.adicionar('Escovar dentes', 'Com escova macia')
tarefa.mostrar();
tarefa.concluir();
tarefa.mostrar();

