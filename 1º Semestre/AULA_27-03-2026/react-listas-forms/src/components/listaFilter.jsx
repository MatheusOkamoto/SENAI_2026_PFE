const estudantes = [
    {id: 1, nome: "Ellefer", idade: 17, ra: 189900, disciplina: 'Ed. Física'},
    {id: 2, nome: "Luis Otávio", idade: 17, ra: 17700, disciplina: 'Língua Portuguesa'},
    {id: 3, nome: "Maria Eduarda", idade: 17, ra: 190909, disciplina: 'Ed. Física'}
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Ed. Física')
    const listaEstudantes = lista.map((estudante) =>{
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
            <p>{estudante.disciplina}</p>
        </li>
    })
    return (
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    )
}