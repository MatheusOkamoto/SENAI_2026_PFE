import './App.css';
import Mensagem from './components/mensagem.jsx';
import PropsNomeado from './components/propsNomeado.jsx';
import MeuAvatar from './components/meuAvatar.jsx';
import FotoPerfil from './assets/img/perfil.jpg';

function App() {
  return (
    <>
      {/* <Mensagem titulo='Aprendendo Props ou Properties ou ainda Propriedades' texto='Bem vindo(a) ao mundo das Props' nome='Ana Luiza'/>
      <Mensagem titulo='Interclasse 2026' texto='Bem vindo(a) ao interclasse' nome='Matheus'/>
      <PropsNomeado titulo='Interclasse 2026' texto='Bem vindo(a) ao interclasse' nome='Matheus' altura={1.75}/> */}
      <MeuAvatar nome='Matheus' idade={17} foto_de_perfil={FotoPerfil} estilo_musical='Rock' disciplina_fav='Matemática'/>
    </>
  )
}

export default App
