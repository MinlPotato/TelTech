import React, { useState, useEffect } from "react";
import { Button, Card, ToggleButton } from "react-bootstrap";
// import ShopContext from "../ContextT/ShopContext";
// import "./Card.css";
// import ModalCarrito from "../Modal/Modal";
import { NavLink } from "react-router-dom";

function ProductoCard(props) {
  let { id, image, name, precio, desc } = props.info;

  const [price, setPrice] = useState(precio * 25);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { cantidad: 25, value: "1" },
    { cantidad: 50, value: "2" },
    { cantidad: 75, value: "3" },
    { cantidad: 100, value: "4" },
    { cantidad: 200, value: "5" },
  ];

  let prodcutoInfo = {
    id: id,
    image: image,
    name: name,
    precio: precio,
    desc: desc,
    cantidad: price / precio,
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
                className="img-fluid zoom"
                alt="img"
                style={{ width: "500px" }}
                src={image}
              ></img>
            </div>
          </div>
          <div className="col-sm-4">
            <Card className="align-items-start p-2">
              <h2 className="mb-2 "> {name} </h2>
              <p className="mb-5 text-muted">Stock Disponible</p>

              <h3 className="text-muted mb-5">
                {" "}
                $ {precio} <span className="text-muted fs-5">c/u</span>{" "}
              </h3>

              <Card.Body className="w-100">
                <h4 className="text-start">Cantidad</h4>
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="outline-primary"
                      name={radio.cantidad}
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => {
                        setRadioValue(e.currentTarget.value);
                        setPrice(e.currentTarget.name * precio);
                      }}
                    >
                      {radio.cantidad}
                    </ToggleButton>
                  ))}

                  <h5 className="mb-0 text-muted">$ {price} </h5>
                </div>
              </Card.Body>

              <Card.Body className="d-flex gap-1 flex-column align-items-center w-100 justify-content-center">
                {/* <ShopContext.Consumer>
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
                </ShopContext.Consumer> */}
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-sm ">
            <div className="align-items-start text-start">
              <h2 className="pt-3">Descripción</h2>
              <p className="text-muted"> {desc} </p>
            </div>
          </div>

          <div className="col-sm"></div>
        </div>
      </div>
    </>
  );
}

export default ProductoCard;
