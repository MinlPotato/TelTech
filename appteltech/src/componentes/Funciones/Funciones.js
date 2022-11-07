import React from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';

export const AllProductos = async (state) => {
    const llamada = await axios.get(`https://rickandmortyapi.com/api/character${Math.random(Math.floor(20))}`)
    state(llamada.data.results)
}

export function ActiveURL() {

    const navigation = [
      { name: "Inicio", href: "/Inicio" },
      { name: "Productos", href: "/productos" },
      { name: "Orders", href: "/wip" },
      { name: "Test", href: "/wip2" },
      { name: "Informacion", href: "/informacion" },
    ];

    return navigation.map((item) => (
      <NavLink
        key={item.name}
        to={item.href}
        style={{ fill: "#FFFFFF" }}
        className={({ isActive }) => {
          return (
            " nav-link text-decoration-none " +
            (isActive ? "disabled active" : "text-white")
          );
        }}
      >
        {item.name}
      </NavLink>
    ));

}
 



