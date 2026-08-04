import { useContext } from "react";
import "./estilos.css";
import Header from "./components/header";
import Noticias from "./components/noticias";
import { ContextoTema } from "./contextos/temaContexto";

function App() {
  const { tema } = useContext(ContextoTema);

  return (
    <div className={`app ${tema}`}>
      <Header />
      <Noticias />
    </div>
  );
}

export default App;