import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import ShopContext from "../ContextT/ShopContext";
import "./Card.css";
// import ModalCarrito from "../Modal/Modal";
import { NavLink } from "react-router-dom";

function ProductoCard(props) {

  let {
    id,
    nombre,
    imagen,
    precio,
    descripcion,
    tipoDeTelescopio,
    fabricante,
    paisDeOrigen,
  } = props.info; 

  return (
    <>
      <div className="text-center container mx-5  py-4">
        <div className="row">
          <div className="col-sm-7 ">
            <div className="align-items-center border-bottom border-dark">
              <img
                className="img-fluid zoom mb-3 rounded"
                alt="img"
                style={{ objectFit: "cover", width: "710px", height: "510px" }}
                src={imagen}
              ></img>
            </div>
          </div>
          <div className="col-4 mx-4">
            <Card className="align-items-start p-2">
              <h2 className="mb-2 "> {nombre} </h2>
              <p className="mb-5 text-muted">Stock Disponible</p>
              <h3 className="text-muted mb-5">$ {precio}</h3>

              <Card.Body className="w-100 justify-content-center align-items-center">
                <h5 className="text-start"> Caracteristicas </h5>
                <ul className="list-group list-group-horizontal mb-1">
                  <li className="list-group-item w-100 text-start text-muted bg-transparent border-primary">
                    Tipo de producto
                  </li>
                  <li className="list-group-item w-75 text-muted bg-transparent border-secondary">
                    {tipoDeTelescopio}
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal mb-1">
                  <li className="list-group-item w-100 text-start text-muted bg-transparent border-primary">
                    Fabricante
                  </li>
                  <li className="list-group-item w-75 text-muted bg-transparent border-secondary">
                    {fabricante}
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal mb-1">
                  <li className="list-group-item text-start w-100 text-muted bg-transparent border-primary">
                    Pais de origen
                  </li>
                  <li className="list-group-item w-75 text-muted bg-transparent border-secondary">
                    {paisDeOrigen}
                  </li>
                </ul>
              </Card.Body>
              <Card.Body className="d-flex gap-1 flex-column align-items-center w-100 justify-content-center">
                <ShopContext.Consumer>
                  {(value) => (
                    <>
                      <NavLink className="w-100" to="/Carrito">
                        <Button
                          className="w-100"
                          onClick={() => value.addProductToCart(props.info)}
                        >
                          Comprar Ahora
                        </Button>
                      </NavLink>

                      <Button
                        className="w-100"
                        variant="outline-primary"
                        onClick={() => value.addProductToCart(props.info)}
                      >
                        Agregar al Carrito
                      </Button>
                    </>
                  )}
                </ShopContext.Consumer>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-sm ">
            <div className="align-items-start text-start">
              <h2 className="pt-3">Descripción</h2>
              <p className="text-muted"> {descripcion} </p>
            </div>
          </div>

          <div className="col-sm"></div>
        </div>
      </div>
    </>
  );
}

export default ProductoCard;
