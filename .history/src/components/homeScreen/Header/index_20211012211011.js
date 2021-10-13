import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header>
        <div className="logo-name">
            <img src={logo}/>
            <nav>
            <ul>
                <li>Inicio</li>
                <li>Inicio</li>
                <li>Inicio</li>
            </ul>
            </nav>
        </div>
        </header>
    );
}