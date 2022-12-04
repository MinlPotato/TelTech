import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Inicio.css";
import planeta from "../Assets/planeta-tierra.png"
import Logo from "../Assets/LogoTeltech2.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="dark fontSpace">
        <h1 style={{ fontSize: "100px" }}>Bienvenidos a TelTech</h1>

        <img
          src={planeta}
          className="w-100"
          style={{ maxWidth: "2600px" }}
        ></img>
      </section>

      <section className="informacion">
        <div className="container text-center">
          <div class="row">
            <div class="col mb-4">
              <h2>Que es TelTech?</h2>
            </div>
            <div class="col "></div>
          </div>
          <div class="row mb-5">
            <div class="col text-start p-4 card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                velit dignissim sodales ut eu sem integer. Purus semper eget
                duis at tellus at urna. Pellentesque massa placerat duis
                ultricies. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate sapien. In egestas erat
                imperdiet sed. Consectetur purus ut faucibus pulvinar elementum
                integer enim neque. Malesuada pellentesque elit eget gravida cum
                sociis natoque penatibus et. Ut placerat orci nulla pellentesque
                dignissim. Scelerisque purus semper eget duis at tellus at.
                Fames ac turpis egestas maecenas pharetra convallis posuere. At
                volutpat diam ut venenatis tellus. Malesuada fames ac turpis
                egestas maecenas. Egestas pretium aenean pharetra magna.
                Pellentesque diam volutpat commodo sed egestas egestas
                fringilla. Rhoncus urna neque viverra justo nec. Id consectetur
                purus ut faucibus pulvinar elementum. Id velit ut tortor
                pretium. Quam lacus suspendisse faucibus interdum.
                <hr></hr>
                Tellus id interdum velit laoreet id donec ultrices. Tincidunt
                lobortis feugiat vivamus at augue eget. Urna nunc id cursus
                metus aliquam eleifend. Aliquam nulla facilisi cras fermentum
                odio. Morbi tincidunt augue interdum velit euismod in
                pellentesque massa placerat. Adipiscing bibendum est ultricies
                integer quis auctor elit sed. Congue quisque egestas diam in
                arcu. Sit amet justo donec enim diam. Vel risus commodo viverra
                maecenas accumsan. Fusce id velit ut tortor. Vitae et leo duis
                ut diam quam nulla. Enim nulla aliquet porttitor lacus. Magna
                eget est lorem ipsum dolor sit amet. Praesent semper feugiat
                nibh sed pulvinar proin gravida hendrerit.
              </p>
            </div>
            <div class="col ">
              <img
                src={Logo}
                className="border-transparent card p-4"
                style={{ width: "600px" }}
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBotones mb-5">
        <div className="w-100 d-flex gap-2 px-5">
          <NavLink to="/productos" className="w-50 text-decoration-none text-white">
            <div className="buttonTelescopios">
              <h1 className="text-center ">Telescopios</h1>
            </div>
          </NavLink>
          <NavLink to="/productos" className="w-50 text-decoration-none text-white">
            <div className=" buttonAccesorios">
            <h1 className="text-center">Accesorios</h1>
          </div>
          </NavLink>
          <NavLink to="/informacion" className="w-50 text-decoration-none text-white">
            <div className=" buttonInformacion">
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
