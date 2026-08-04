import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TemaProvedor } from "./contextos/temaContexto.jsx";
import "./estilos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemaProvedor>
      <App />
    </TemaProvedor>
  </StrictMode>
);