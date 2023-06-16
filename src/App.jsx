import react from 'react'
import { BrowserRouter, Route, Routes}  from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Inicio/>
          </div>}>
        </Route>
        <Route path="/Nosotros" element={
          <div>
            <Nosotros/>
          </div>}>
        </Route>
        <Route path="/Contacto" element={
          <div>
            <Contacto/>
          </div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
