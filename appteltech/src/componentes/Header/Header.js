import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/LogoTeltech2.png";
import { ActiveURL } from "../Funciones/Funciones";
import HeaderNormal from "./HeaderNormal";
import HeaderFixed from "./HeaderFixed";
import "./Header.css";

function Header() {
  const [fix, setFix] = useState(false);

  function SetFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  
  document.addEventListener("scroll", SetFixed);

  return fix == false ? (
    //home, contacto, catalogo
    <>
      <HeaderNormal />
    </>
  ) : (
    <>
      <HeaderNormal />
      <HeaderFixed />
    </>
  );
}

export default Header;
