import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header className="color-action">
        <div className="logo-name">
            <img src={logo}/>
            <nav className="navbar-menu">

            </nav>
        </div>
        </header>
    );
}