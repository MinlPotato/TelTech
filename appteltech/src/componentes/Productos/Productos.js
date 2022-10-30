import React from "react";
import Header from "../Header/Header";
import Logo from "../Assets/LogoTeltech2.png";
import AllProductos from "../Funciones/Funciones";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

const Productos = () => {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    AllProductos(setProductos);
  }, []);
  console.log(productos);

  return (
    <>
      <Header />
      <h1 className="text-center py-5">Telescopios</h1>
      <div className="d-flex gap-4 flex-wrap justify-content-evenly">

        {productos != null
        ? productos.map((producto) => (
            <div key={producto.id}>
              <Card info= {producto}/>
            </div>
          ))
        : "no hay personajes"}
      </div>
      
      <Footer/>
    </>
  );
};

export default Productos;
