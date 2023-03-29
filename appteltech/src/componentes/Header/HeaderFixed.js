import React from 'react'
import { ActiveURL } from '../Funciones/Funciones';
import Logo from "../Assets/LogoTeltech2.png";

function HeaderFixed() {
  return (
    <>
      <header>
        <div className="px-3 py-2 text-bg-white show-animation fixed-top shadow-lg blur">
          <div className="container ">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <img src={Logo} width="150" height="96"></img>
                <h4 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  TelTech
                </h4>
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small nav-pills ">
                <li className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-white gap-2">
                  <ActiveURL />{" "}
                  {/*Crea el NavLink y verifica cual url esta activa */}
                </li>
              </ul>
              <div className="text-end px-2 fontSpace">
                <button
                  type="button"
                  className="btn btn-light text-dark ms-5 me-3"
                >
                  Login
                </button>
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-0 mb-0">
          <div className="container d-flex flex-wrap justify-content-center">
            {/* <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            <input type="search" className="form-control" placeholder="Search..." ariaLabel="Search"> </input>
          </form> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderFixed