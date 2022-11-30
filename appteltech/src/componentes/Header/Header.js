import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Assets/LogoTeltech2.png";
import { ActiveURL } from "../Funciones/Funciones";
import HeaderNormal from "./HeaderNormal";
import HeaderFixed from "./HeaderFixed";
import CarritoButton from "./CarritoButton";
import "./Header.css";


function Header() {
  const [fix, setFix] = useState(false);
  const pathname = useLocation().pathname;
useEffect(() => {
  
  console.log(pathname);
}, [useLocation().pathname]);

  function SetFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  
  document.addEventListener("scroll", SetFixed);

  return  pathname == "/Login" ? (
    <>
    </>

  ) : (
    fix == false ? (
    //home, contacto, catalogo
    <>
      <HeaderNormal />
      <CarritoButton/>
    </>
  ) : (
    <>
      <HeaderNormal />
      <HeaderFixed />
      <CarritoButton/>
    </>
  )
  )
  
  
}

export default Header;
