import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./componentes/Inicio/Inicio";
import Productos from "./componentes/Productos/Productos";
import Informacion from "./componentes/Informacion/Informacion";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Login from "./componentes/Login/Login";
import ShoppingCart from "./componentes/ShoppingCart/ShoppingCart";
import Producto from "./componentes/Producto/Producto";
import GlobalState from "./componentes/ContextT/GlobalState";
import CheckOutPage from "./componentes/CheckOut/CheckOutPage";
import "animate.css"

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/Inicio" />}></Route>
          <Route path="/Inicio" element={<Inicio></Inicio>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/productos/:id" element={<Producto></Producto>}></Route>
          <Route path="/informacion" element={<Informacion></Informacion>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Carrito" element={<ShoppingCart></ShoppingCart>}></Route>
          <Route path="/Carrito/ChekOut" element={<CheckOutPage></CheckOutPage>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
