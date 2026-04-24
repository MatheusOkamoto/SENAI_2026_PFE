import { Link } from "react-router-dom";


export default function Header(){
    return(
        <header>
            <h2>
                Estação metereológica
            </h2>
            <nav>
                <ul>
                    <li><Link to='/dashboard'>Home</Link></li>
                    <li><Link to='/cadastro'>Cadastros</Link></li>
                    <li><Link to='/relatorio'>Relatórios</Link></li>
                    <li><Link to='/'>Sair</Link></li>
                </ul>
            </nav>
        </header>
    )
}