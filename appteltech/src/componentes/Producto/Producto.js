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

  return (
    <>
      {Producto != null ? (
        <>
          <div className="container mt-5 mb-2 card">
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
              <Cards tipo={Producto.tipoDeTelescopio} />
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
