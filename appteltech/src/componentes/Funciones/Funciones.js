import React from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';

const randomNumber = Math.floor(Math.random(0) * 30)

console.log(randomNumber);

export const AllProductos = async (state) => {
    const llamada = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${randomNumber}`
    );
    state(llamada.data.results)
}

export function ActiveURL() {

    const navigation = [
      { name: "Inicio", href: "/Inicio" },
      { name: "Productos", href: "/productos" },
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
 



