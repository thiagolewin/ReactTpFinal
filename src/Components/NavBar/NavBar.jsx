import { Component } from "react";
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
export default function NavBar() {
    return (
        <nav>
            <img src='./src/img/logo.png' alt="" />
            <Link to='/cart' className="cart">🛒</Link>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products/hombre">Hombres</Link></li>
                <li><Link to="/products/mujer">Mujeres</Link></li>
                <li><Link to="/products/hombre/zapatillas">Zapatillas</Link></li>
            </ul>
        </nav>
    )
}