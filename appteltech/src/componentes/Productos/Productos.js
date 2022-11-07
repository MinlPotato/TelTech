import React from "react";
import Header from "../Header/Header";
import Logo from "../Assets/LogoTeltech2.png";
import { AllProductos } from "../Funciones/Funciones";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import "./Productos.css";
import CarouselHome from "../Carousel/Carousel";
import NavProductos from "./NavProductos";

const Productos = () => {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    AllProductos(setProductos);
  }, []);
  console.log(productos);

  return (
    <>
      <div className="mt-2 ">
        <NavProductos />
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <CarouselHome />
        </div>

        <h1 className="text-center py-5">Productos</h1>

        <h2 className="">Telescopios</h2>
        <div className="d-flex flex-nowrap gap-3 bg-dark scroll">
          {productos != null ? (
            productos.slice(0, 10).map((producto) => (
              <div key={producto.id}>
                <Card info={producto} />
              </div>
            ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>

        <h2 className="mt-5">Accesorios</h2>
        <div className="d-flex flex-nowrap gap-3 bg-dark scroll">
          {productos != null ? (
            productos.slice(0, 10).map((producto) => (
              <div key={producto.id}>
                <Card info={producto} />
              </div>
            ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Productos;
