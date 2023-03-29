import React from "react";
import "./Inicio.css";
import planeta from "../Assets/planeta-tierra.png";
import Logo from "../Assets/LogoTeltech2.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="dark fontSpace parallax">
        <h1
          className="titulo animate__animated animate__fadeIn parallaxText"
          style={{ fontSize: "100px" }}
        >
          Bienvenidos a TelTech
        </h1>

        <img
          src={planeta}
          className="w-100 animate__animated animate__fadeInUp"
          style={{ maxWidth: "2600px", marginTop: "150px" }}
          alt="earth"
        ></img>
      </section>

      <section className="informacion">
        <div className="container text-center">
          <div class="row">
            <div class="col mb-4">
              <h2>Que es TelTech?</h2>
            </div>
            <div class="col"></div>
          </div>
          <div class="row mb-5">
            <div class="col text-start p-4 card">
              <p>
                ¡Bienvenidos al mundo de los telescopios! Estamos emocionados de
                presentarles nuestra excepcional gama de telescopios y
                accesorios astronómicos. Nuestros telescopios vienen en una
                variedad de tamaños y diseños para satisfacer las necesidades de
                astrónomos aficionados y profesionales por igual. Ya sea que
                esté buscando un telescopio portátil para observar las estrellas
                sobre la marcha o un instrumento potente para la observación del
                cielo profundo, tenemos algo para todos. Pero no nos detenemos
                solo en los telescopios. También ofrecemos una gama de
                accesorios como oculares, filtros y monturas para mejorar su
                experiencia de visualización y ayudarle a sacar el máximo
                provecho de su telescopio.
                <hr></hr>
                En TelTech entendemos la importancia de la calidad y la
                confianza. Por eso, solo elegimos las mejores marcas.
                Nos dedicamos a brindarle un servicio
                y soporte excepcionales al cliente, asegurando que tenga una
                experiencia sin problemas y agradable. Así que, ya seas 
                un astrónomo experimentado o que esté comenzando, lo invitamos a
                explorar nuestro catalogo de productos y descubrir
                las maravillas del universo por sí mismo.
              </p>
            </div>
            <div class="col ">
              <img
                src={Logo}
                className="border-transparent card p-4"
                style={{ width: "600px" }}
                alt="logo"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBotones mb-1 parallax">
        <h2 className="mb-5" style={{ fontSize: "50px" }}>
          Empieza a explorar!
        </h2>
        <div className="w-100 d-flex gap-2 px-5 ">
          <NavLink
            to="/productos"
            className="w-50 text-decoration-none image-zoom text-white"
          >
            <div className="buttonTelescopios">
              <h1 className="text-center ">Telescopios</h1>
            </div>
          </NavLink>
          <NavLink
            to="/productos"
            className="w-50 text-decoration-none image-zoom text-white"
          >
            <div className=" buttonAccesorios">
              <h1 className="text-center">Accesorios</h1>
            </div>
          </NavLink>
          <NavLink
            to="/informacion"
            className="w-50 text-decoration-none image-zoom text-white"
          >
            <div className=" buttonInformacion ">
              <h1 className="text-center">Informacion</h1>
            </div>
          </NavLink>
        </div>
      </section>
      {/* <div className="space">
        <section className="bubble"></section>

        <section className="dark">
          <h1>Sol</h1>
        </section>

        <section className="bubble flip"></section>
      </div>

      <section className=""></section> */}

      {/* <div className="h-100 text-center">
      <div className="bubble"></div>
        <h1>Bienvenidos a TelTech</h1>
      
      
    </div> */}
    </>
  );
}

export default Home;
