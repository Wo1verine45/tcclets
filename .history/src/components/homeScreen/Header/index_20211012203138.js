import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header>
        <div className="logo-name">
            <img src={logo}/>
        </div>
        <div className="react-logo">
            <span>Feito em React</span>
            <img src="https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Icons/reactWhiteIcon.svg" alt="react icon" />
        </div>
        </header>
    );
}