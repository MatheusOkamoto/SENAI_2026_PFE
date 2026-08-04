import './App.css'
import logoSesi from './assets/img/Sesi-SP.jpg';
import logoSenai from './assets/img/SENAI_Sao_Paulo_logo.png'

function App() {
  return (
    <div className="container">
      <img src={logoSesi} alt="Logo do Sesi" className="logo" />
      <img src={logoSenai} alt="Logo do Senai" className="logo" />
      <h1 className="titulo">Login</h1>
      <span className="subtitulo">para continuar</span>
      <label htmlFor="nome" className="label">NOME</label>
      <input type="text" className="campo" id='nome' placeholder='Seu nome' />
      <label htmlFor="senha" className="label">SENHA</label>
      <input type="text" className="campo" id='senha' placeholder='****' />
      <button className="botao">Log in</button>
      <a href="#" className="link">Esqueceu a senha?</a>
      <a href="#" className="link">Cadastre-se!</a>
    </div>
  )
}

export default App
