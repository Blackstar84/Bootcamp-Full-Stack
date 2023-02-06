import { Route, BrowserRouter, Routes } from "react-router-dom"
import VistaPractica2 from "./views/VistaPractica2"
import VistaPracticas from "./views/VistaPracticas"
import VistaPrincipal from './views/VistaPrincipal'
import VistaSecundaria from "./views/VistaSecundaria"

export default function App() {


  return (
    <div>
      {/* este browsrouter vendría a ser el react-router-dom sería la para llamar a la librería */}
      <BrowserRouter>
        {/* el routes va a verificar qué ruta necesitamos y qué componente vamos a usar */}
        <Routes>
          <Route exact path="/" element={<VistaPrincipal />}></Route>
          <Route exact path="/vistasecundaria" element={<VistaSecundaria />}></Route>
          <Route exact path="/vistapractica" element={<VistaPracticas />}></Route>
          <Route exact path="/vistapractica2" element={<VistaPractica2 />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )

}