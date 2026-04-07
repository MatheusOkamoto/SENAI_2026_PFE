import {Routes, Route} from 'react-router-dom';

//import das rotas
import Login from '../pages/login';
// import Registro from '../pages/registro';
// import Dashboard from '../pages/dashboard';
// import Cadastro from '../pages/cadastro';
// import Relatorio from '../pages/relatorio';
// import NotFound from '../pages/notfound';

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Login />}/>
        </Routes>
    )
}

