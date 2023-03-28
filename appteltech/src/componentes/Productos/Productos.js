import React from "react";
import Cards from "../Card/Card";
import "./Productos.css";
import CarouselHome from "../Carousel/Carousel";
import NavProductos from "./NavProductos";
import { telescopios } from "../Assets/TelescopiosAPI";
import Carousel from "react-bootstrap/Carousel";

const Productos = () => {
  return (
    <>
    
      {/* <div className="mt-2 ">
        <NavProductos />
      </div> */}

      <div className="container card mt-0 mb-5">
        <div className="d-flex justify-content-center">
          <CarouselHome />
        </div>

        <h1 className="text-center py-5">Productos</h1>

        <h2 className="">Telescopios</h2>
        <div
          style={{ gap: "30px" }}
          className="d-flex flex-start overflow-auto flex-nowrap p-4"
        >
          <Cards />
        </div>
        <h2 className="mt-5">Accesorios</h2>
        <div
          style={{ gap: "30px" }}
          className="d-flex flex-start overflow-auto flex-nowrap p-4"
        >
          <Cards/>
        </div>
      </div>
    </>
  );
};

export default Productos;
