import React from "react";
import Cards from "../Card/Card";
import "./Productos.css";
import CarouselHome from "../Carousel/Carousel";
import NavProductos from "./NavProductos";
import { telescopios } from "../Assets/TelescopiosAPI";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";


const Productos = () => {

useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, []);

  return (
    <>
      {/* <div className="mt-2 ">
        <NavProductos />
      </div> */}
      <div className="container card mt-3 mb-5">
        <div className="d-flex justify-content-center">
          <CarouselHome />
        </div>

        <h1 className="text-center py-5">Productos</h1>

        <h2 className="">Telescopios</h2>
        <div
          style={{ gap: "30px" }}
          className="d-flex flex-start justify-content-center overflow-auto flex-wrap p-4 "
        >
          <Cards accesorio="No" />
        </div>
        <h2 className="mt-5">Accesorios</h2>

        <div
          style={{ gap: "30px" }}
          className="d-flex flex-start justify-content-center overflow-auto flex-wrap p-4"
        >
          <Cards accesorio="Si" />
        </div>
      </div>
    </>
  );
};

export default Productos;
