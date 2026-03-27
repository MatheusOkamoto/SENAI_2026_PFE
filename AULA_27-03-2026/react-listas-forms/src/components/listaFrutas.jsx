const frutas = [
    {id: 1, fruta: 'Maçã'},
    {id: 2, fruta: 'Banana'},
    {id: 3, fruta: 'Pera'},
    {id: 4, fruta: 'Abacaxi'},
    {id: 5, fruta: 'Manga'}
]

export default function ListaFrutas({titulo}){
    const listaFrutas = frutas.map((fruta) => {
        return <li key={fruta.id}>
            <h5>{fruta.fruta}</h5>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaFrutas}
        </ul>
        </>
    )
}