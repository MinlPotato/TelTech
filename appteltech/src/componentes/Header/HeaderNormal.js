import React from 'react'
import { ActiveURL } from '../Funciones/Funciones';
import Logo from "../Assets/LogoTeltech2.png";
import { NavLink } from 'react-router-dom';

function HeaderNormal() {
  return (
    <header>
      <div className="px-3 py-2 bg-dark shadow-lg">
        <div className="container">
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
            <div className="text-end px-2">

               <button type="button" className="btn btn-light text-dark me-2">
                Login
              </button>
              <a href="/Login">
                <button type="button" className="btn btn-primary">
                Sign-up
              </button>
              </a>
             
              
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
  );
}

export default HeaderNormal