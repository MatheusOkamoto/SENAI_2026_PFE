import { createContext, useState } from "react";

export const ContextoTema = createContext();

export function TemaProvedor({ children }) {
  const [tema, setTema] = useState("light");

  function mudarTema() {
    setTema((temaAtual) => (temaAtual === "light" ? "dark" : "light"));
  }

  return (
    <ContextoTema.Provider value={{ tema, mudarTema }}>
      {children}
    </ContextoTema.Provider>
  );
}   