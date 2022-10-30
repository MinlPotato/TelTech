import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/LogoTeltech2.png";
import { ActiveURL } from "../Funciones/Funciones";


function Header() {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark shadow-lg">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img src={Logo} width="150" height="96"></img>
              <h4 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                TelTech
              </h4>
              {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg> */}
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small nav-pills">
              <li className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-white">
                <ActiveURL />{" "}
                {/*Crea el NavLink y verifica cual url esta activa */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            {/* <input type="search" className="form-control" placeholder="Search..." aria-label="Search"> </input> */}
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
