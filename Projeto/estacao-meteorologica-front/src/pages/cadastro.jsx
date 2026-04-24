import { useState } from "react";
import Header from "../components/header";
import "./cadastro.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [documento, setDocumento] = useState("");

  return (
    <>
      <Header />

      <main className="cadastro-page">
        <section className="cadastro-container">
          <div className="cadastro-info">
            <span>Cadastro</span>
            <h3>Cadastro de dados pessoais</h3>
            <p>Preencha suas informações para registrar os dados no sistema.</p>
          </div>

          <form className="cadastro-form" action="">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              placeholder="Seu endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="celular">Celular</label>
            <input
              id="celular"
              type="text"
              placeholder="Seu celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />

            <label htmlFor="documento">Documento</label>
            <input
              id="documento"
              type="text"
              placeholder="Seu documento"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />

            <button type="submit">Salvar</button>
          </form>
        </section>
      </main>
    </>
  );
}