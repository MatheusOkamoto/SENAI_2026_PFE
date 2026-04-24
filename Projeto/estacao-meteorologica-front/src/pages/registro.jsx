import { useState } from "react";
import { Link } from "react-router-dom";
import "./registro.css";
import imagemEstacao from "../assets/estacao.jpg";

export default function Registro() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  return (
    <section className="registro-page">
      <div className="registro-card">
        <img src={imagemEstacao} alt="Estação meteorológica" />

        <div className="registro-formulario">
          <div className="registro-header">
            <h2>Cadastrar</h2>
            <p>Crie sua conta</p>
          </div>

          <form action="">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              className="registro-input"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              className="registro-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <label htmlFor="confirmaSenha">Confirma Senha</label>
            <input
              type="password"
              id="confirmaSenha"
              className="registro-input"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />

            <Link to="/dashboard" className="registro-botao">
              Cadastrar
            </Link>
          </form>

          <Link to="/" className="registro-link">
            Já tem conta? Faça login
          </Link>
        </div>
      </div>
    </section>
  );
}