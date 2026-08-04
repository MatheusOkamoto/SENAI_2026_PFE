export default function meuAvatar({nome,idade,foto_de_perfil,estilo_musical,disciplina_fav}) {
    return (
        <>
        <h1>{nome}</h1>
        <p>Idade: {idade}</p>
        <img src={foto_de_perfil} alt="" />
        <p>Estilo Musical: {estilo_musical}</p>
        <p>Disciplina Favorita: {disciplina_fav}</p>
        </>
    )
}