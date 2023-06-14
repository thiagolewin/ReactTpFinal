import { Component } from "react";
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
export default function NavBar() {
    return (
        <nav>
            <img src="./src/img/logo.png" alt="" />
            <ul>
                <li><Link href="/index">Inicio</Link></li>
                <li><Link href="/ropa/hombres">Hombres</Link></li>
                <li><Link href="/ropa/mujeres">Mujeres</Link></li>
                <li><Link href="/ropa/zapatillas">Zapatillas</Link></li>
            </ul>
        </nav>
    )
}