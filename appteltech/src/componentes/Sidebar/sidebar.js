import { React, useRef } from 'react';

function Sidebar(props){
    const info1 = props.info[0];
    const info2 = props.info[1];
    const info3 = props.info[2];
    
    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
    return (
        <>
        
    <div className="flex-shrink-0 p-3 bg-white" style={{width: "400px", fontSize: "50px"}}>
        <a href="/informacion" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Informacion</span>
        </a>
        <ul className="list-unstyled ps-0">
        <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            Home
            </button>
            <div className="collapse show" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li onClick ={() => scrollToSection(info1)}>
                    <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Info1</a></li>
                <li onClick ={() => scrollToSection(info2)}>
                <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Info2</a></li>
                <li onClick ={() => scrollToSection(info3)}>
                    <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Info3</a></li>
            </ul>
            </div>
        </li>
        <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Weekly</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Monthly</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
            </ul>
            </div>
        </li>
        <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
            </button>
            <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">New</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
            </ul>
            </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
            </button>
            <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">New...</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
            </ul>
            </div>
        </li>
        </ul>
    </div>
    </>
  )}

  export default Sidebar
