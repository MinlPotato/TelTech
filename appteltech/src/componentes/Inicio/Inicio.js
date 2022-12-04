import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Inicio.css";
import planeta from "../Assets/planeta-tierra.png"

function Home() {
  return (
    <>
      <section className="dark fontSpace">
        <h1 style={{fontSize: "100px"}}>Bienvenidos a TelTech</h1>
        
      

    <img src= {planeta} className="w-100"></img>
      </section>
       <section className="">

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
