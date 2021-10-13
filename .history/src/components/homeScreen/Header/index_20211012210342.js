import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header>
        <div className="logo-name">
            <img src={logo}/>
            <ul>
                <li>Inicio</li>
                <li>Inicio</li>
                <li>Inicio</li>
            </ul>
        </div>
        <div className="react-logo">
            <img src="https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Icons/reactWhiteIcon.svg" alt="react icon" />
        </div>
        </header>
    );
}