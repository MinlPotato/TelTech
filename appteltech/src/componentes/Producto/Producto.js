import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import ProductoCard from "../Card/ProductoCard";
import { telescopios } from "../Assets/TelescopiosAPI";

import Breadcrumb from "react-bootstrap/Breadcrumb";

function Producto() {
  const { id } = useParams();

  const [Producto, setProducto] = useState();

  useEffect(() => {
    getProductById(id);
  }, []);

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
          <div className="container my-2 card">
            <Breadcrumb className="d-flex align-items-center ">
              <Breadcrumb.Item>
                <NavLink to="/productos">Productos</NavLink>
              </Breadcrumb.Item>

              <Breadcrumb.Item active> {Producto.nombre} </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="d-flex justify-content-center card container">
            <ProductoCard info={Producto} />
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
