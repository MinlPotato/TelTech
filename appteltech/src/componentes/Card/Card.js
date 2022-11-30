import React from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "../ContextT/ShopContext";
import { Card } from "react-bootstrap";
import "./Card.css";

function Cards() {
  return (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.products.map((p) => {
              return (
                <Card>
                  <div className="shadow" style={{ width: "200px" }}>
                    {p.imagen == null ? (
                      <img
                        src=""
                        alt="img"
                        className="card-img-top rounded"
                      ></img>
                    ) : (
                      <NavLink to={`/productos/${p.id}`}>
                        <img
                          src={p.imagen}
                          alt="img"
                          className="card-img-top rounded unzoom"
                          style={{
                            objectFit: "cover",
                            width: "230px",
                            height: "230px",
                          }}
                        ></img>
                      </NavLink>
                    )}

                    {/* <Card.Body>
                      <p className="text-center"> {p.name} </p>
                      <Button
                        onClick={() => context.addProductToCart(p)}
                        variant="primary"
                      >
                        AÑADIR AL CARRITO
                      </Button>
                    </Card.Body> */}
                  </div>
                </Card>
              );
            })}
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </>
  );
}

export default Cards;
