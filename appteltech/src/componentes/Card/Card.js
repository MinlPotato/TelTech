import React from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "../ContextT/ShopContext";
import { Card } from "react-bootstrap";
import "./Card.css";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import { useEffect } from "react";
import ScrollHorizontal from "react-scroll-horizontal";

function Cards(props) {
  console.log(props.tipo);
  console.log(props.accesorio);

  let accesorio = props.accesorio;
  let tipo = props.tipo;
  let id = props.id;

  return tipo != undefined ? (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.products.map((p) => {
              return p.tipoDeTelescopio == `${tipo}` && p.id != `${id}` ? (
                <div>
                  <div className="shadow" style={{ width: "230px" }}>
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
                </div>
              ) : (
                <></>
              );
            })}
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </>
  ) : (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.products.map((p) => {
              return p.Accesorio == `${accesorio}` && p.id != `${id}` ? (
                <div>
                  <div className="shadow" style={{ width: "230px" }}>
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
                </div>
              ) : (
                <></>
              );
            })}
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </>
  );
}

export default Cards;
