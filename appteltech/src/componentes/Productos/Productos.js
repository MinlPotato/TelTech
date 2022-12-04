import React from "react";
import Cards from "../Card/Card";
import "./Productos.css";
import CarouselHome from "../Carousel/Carousel";
import NavProductos from "./NavProductos";
import { telescopios } from "../Assets/TelescopiosAPI";

const Productos = () => {
  return (
    <>
      <div className="mt-2 ">
        <NavProductos />
      </div>
      <div className="container card mt-3 mb-5">
        <div className="d-flex justify-content-center">
          <CarouselHome />
        </div>

        <h1 className="text-center py-5">Productos</h1>

        <h2 className="">Telescopios</h2>
        <div className="d-flex flex-start gap-5 mb-3 overflow-auto flex-nowrap p-4">
          <Cards />
        </div>

        {/* <h2 className="mt-5">Accesorios</h2>
        <div className="d-flex flex-nowrap gap-3 bg-dark scroll">
          {<Cards /> != null ? (
            <div>
              <Cards />
            </div>
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Productos;
