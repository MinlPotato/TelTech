import React, { useState, useEffect } from "react";
import { Button, Card, ToggleButton } from "react-bootstrap";
import ShopContext from "../ContextT/ShopContext";
import "./Card.css";
// import ModalCarrito from "../Modal/Modal";
import { NavLink } from "react-router-dom";

function ProductoCard(props) {
  let { id, nombre, imagen, precio, descripcion } = props.info;

  const [price, setPrice] = useState(precio * 25);
  const [radioValue, setRadioValue] = useState("1");

  let prodcutoInfo = {
    id: id,
    image: imagen,
    name: nombre,
    precio: precio,
    cantidad: price / precio,
    descripcion: descripcion
  };

  console.log(prodcutoInfo);
  console.log(props.info);
  return (
    <>
      <div className="text-center container mx-5  py-4">
        <div className="row">
          <div className="col-sm-7 ">
            <div className="align-items-center border-bottom">
              <img
                className="img-fluid zoom mb-3"
                alt="img"
                style={{ width: "500px" }}
                src={imagen}
              ></img>
            </div>
          </div>
          <div className="col-sm-4">
            <Card className="align-items-start p-2">
              <h2 className="mb-2 "> {nombre} </h2>
              <p className="mb-5 text-muted">Stock Disponible</p>

              <h3 className="text-muted mb-5">
                {" "}
                $ {precio}
              </h3>

              <Card.Body className="w-100">
                
              </Card.Body>

              <Card.Body className="d-flex gap-1 flex-column align-items-center w-100 justify-content-center">
                <ShopContext.Consumer>
                  {(value) => (
                    <>
                      <NavLink className="w-100" to="/Carrito">
                        <Button
                          className="w-100"
                          onClick={() => value.addProductToCart(prodcutoInfo)}
                        >
                          Comprar Ahora
                        </Button>
                      </NavLink>

                      <Button
                        className="w-100"
                        variant="outline-primary"
                        onClick={() => value.addProductToCart(prodcutoInfo)}
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
