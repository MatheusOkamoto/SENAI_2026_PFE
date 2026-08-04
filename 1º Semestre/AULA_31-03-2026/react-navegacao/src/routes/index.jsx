import { Route, Routes } from 'react-router-dom'
import Principal from '../pages/principal'
import Sobre from '../sobre'
import Galeria from '../pages/galeria'
import Produto from '../pages/produto'

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/produto/:id" element={<Produto />} />
    </Routes>
  )
}
