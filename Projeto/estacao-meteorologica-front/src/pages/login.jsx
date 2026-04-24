import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import imagemEstacao from "../assets/estacao.jpg";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <section className="login-page">
      <div className="login-card">
        <img src={imagemEstacao} alt="Estação meteorológica" />

        <div className="login-formulario">
          <div className="login-header">
            <h2>Login</h2>
            <p>Entre na sua conta</p>
          </div>

          <form action="">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              className="login-input"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              className="login-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <Link to="/dashboard" className="login-botao">
              Login
            </Link>
          </form>

          <Link to="/registro" className="login-link">
            Não tem conta? Cadastre-se
          </Link>
        </div>
      </div>
    </section>
  );
}