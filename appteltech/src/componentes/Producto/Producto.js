import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import ProductoCard from "../Card/ProductoCard";
import { telescopios } from "../Assets/TelescopiosAPI";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Cards from "../Card/Card";

function Producto() {
  const { id } = useParams();

  const [Producto, setProducto] = useState();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  function getProductById(id) {
    const item = telescopios.find((x) => x.id === id);
    if (item != null) {
      setProducto(item);
    }
  }

   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);

  console.log(Producto);
  return (
    <>
      {Producto != null ? (
        <>
          <div className="container mt-1 pt-3">
            <Breadcrumb className="d-flex align-items-center">
              <Breadcrumb.Item>
                <NavLink to="/productos">Productos</NavLink>
              </Breadcrumb.Item>

              <Breadcrumb.Item active> {Producto.nombre} </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="justify-content-center card container mb-5">
            <ProductoCard info={Producto} />
          </div>
          <h2 className="mt-5 container">Telescopios similares</h2>
          <div className="justify-content-center card container mb-5">
            <div
              style={{ overflow: "auto" }}
              className="d-flex flex-start gap-4 flex-nowrap p-4 "
            >
              <div
                className="d-flex gap-3"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <Cards tipo={Producto.tipoDeTelescopio} id={Producto.id} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Producto;
