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

    useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, []);

  return context.cart.length >= 1 ? (
    <>
      <h1 className="text-center font mt-5">Carrito</h1>
      <div className="container card p-5 mb-5" style={{ minHeight: "700px" }}>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          {context.cart.map((cartItem) => (
            <div key={cartItem.id} className="card border-dark">
              <NavLink to={`/productos/${cartItem.id}`}>
                <img
                  className="unzoom border-bottom rounded-top"
                  src={cartItem.imagen}
                  style={{
                    objectFit: "cover",
                    width: "200px",
                    height: "200px",
                  }}
                ></img>
              </NavLink>

              <div className="card-body border-bottom border-dark ">
                <p>{cartItem.nombre}</p>
                <p>Cantidad: {cartItem.quantity}</p>
                <p className="m-0">
                  Precio: ${cartItem.precio * cartItem.quantity}{" "}
                </p>
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
      <h1 className="text-center mt-5 m-3 font">Carrito</h1>
      <div
        className="container card p-3 d-flex justify-content-center mb-5 flex-column"
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
    </>
  );
}

export default ShoppingCart;
