import { useContext } from "react";
import { ContextoTema } from "../contextos/temaContexto";

function Header() {
  const { tema, mudarTema } = useContext(ContextoTema);

  return (
    <header className="header">
      <h1>Portal de Notícias</h1>
      <button onClick={mudarTema}>
        Mudar para tema {tema === "light" ? "dark" : "light"}
      </button>
    </header>
  );
}

export default Header;