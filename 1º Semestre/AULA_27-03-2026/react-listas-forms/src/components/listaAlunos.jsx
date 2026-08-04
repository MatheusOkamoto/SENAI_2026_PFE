const alunos = [
{ id:0, nome: "Ana", nota: 7, fotoperfil: "https://randomuser.me/api/portraits/women/1.jpg" },
{id: 1, nome: "Bruno", nota: 4, fotoperfil: " https://randomuser.me/api/portraits/men/1.jpg"},
{ id: 2, nome: "Carla", nota: 9, fotoperfil: "https://randomuser.me/api/portraits/women/2.jpg" },
{ id: 3, nome: "Diego", nota: 5, fotoperfil: "https://randomuser.me/api/portraits/men/2.jpg" },
{ id: 4, nome: "Eduarda", nota: 8, fotoperfil: "https://randomuser.me/api/portraits/women/3.jpg" }
]

export default function ListaAlunos({titulo}){
    const lista = alunos.filter(aluno => aluno.nota >= 6)
    const listaAlunos = lista.map((aluno) =>{
        return <li key={aluno.id}>
            <h2>{aluno.nome}</h2>
            <h5>{aluno.nota}</h5>
            <img src={aluno.fotoperfil} alt={aluno.nome} />
        </li>
    })
    return (
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaAlunos}
        </ul>
        </>
    )
}