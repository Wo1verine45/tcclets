import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header>
        <div className="logo-name">
            <img src={logo}/>
            <nav className="navbar-menu">
                    <a href="#">Inicio</a>
                    <a href="#">Inicio</a>
                    <a href="#">Inicio</a>
                    <a href="#">Inicio</a>
            </nav>
        </div>
        </header>
    );
}