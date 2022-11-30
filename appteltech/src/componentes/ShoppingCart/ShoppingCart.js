import React, { useContext, useEffect } from "react";
import ShopContext from "../ContextT/ShopContext";

import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ShoppingCart() {
  const context = useContext(ShopContext);
  console.log(context.cart);

    useEffect(() => {
      console.log(context);
    }, []);

  return context.cart.length >= 1 ? (
    <>
      <h1 className="text-center font">Carrito</h1>
      <div className="container card p-5" style={{ minHeight: "700px" }}>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          {context.cart.map((cartItem) => (
            <div key={cartItem.id} className="card">
              <NavLink to={`/Catalogo/${cartItem.id}`}>
                <img
                  className="unzoom border-bottom"
                  src={cartItem.image}
                  style={{ width: "200px" }}
                ></img>
              </NavLink>

              <div className="card-body border-bottom ">
                <p>{cartItem.name}</p>
                <p>Cantidad: {cartItem.quantity}</p>
                <p className="m-0">Precio: ${cartItem.precio * cartItem.quantity} </p>
              </div>
              <div className="card-body text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex flex-row-reverse" style={{ marginTop: "170px" }}>
          <NavLink to="/Carrito/ChekOut">
            <Button className="">Pagar</Button>
          </NavLink>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="">
        <h1 className="text-center mb-5 font">Carrito</h1>
        <div
          className="container card p-3 d-flex justify-content-center flex-column"
          style={{ minHeight: "600px" }}
        >
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <h3>No hay ningun producto en tu carrito :(</h3>
          </div>
          {/* <img
            src={sadFruitImage}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "30%",
            }}
            alt="sad-image"
          ></img> */}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
