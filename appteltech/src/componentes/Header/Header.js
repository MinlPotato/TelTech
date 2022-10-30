import React from 'react'
import Logo from  '../Assets/LogoTeltech2.png'
 
function Header(props) {
    const {one, two, three, four, five} = props

    console.log(one);

  return (
    <header>
    <div className="px-3 py-2 text-bg-dark">
      <div className="container shadow">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src= {Logo}  width="150" height="96">
                
            </img>
            <h4 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">TelTech</h4>
            {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg> */}
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" className="nav-link text-secondary">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg> */}
                Inicio
              </a>
            </li>
            <li>
              <a href="/productos" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg> */}
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg> */}
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg> */}
                Test
              </a>
            </li>
            <li>
              <a href="/informacion" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg> */}
                Informacion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          {/* <input type="search" className="form-control" placeholder="Search..." aria-label="Search"> </input> */}
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-light text-dark me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header