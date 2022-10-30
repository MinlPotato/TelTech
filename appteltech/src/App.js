import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Inicio from './componentes/Inicio/Inicio';
import Productos from './componentes/Productos/Productos'
import Informacion from './componentes/Informacion/Informacion';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/informacion" element={<Informacion></Informacion>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
