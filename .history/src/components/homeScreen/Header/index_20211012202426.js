import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header>
        <div class="logo-name">
            <img src={logo}/>
        </div>
        <div>
            <span>feito em React</span>
            <img src="https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Icons/reactWhiteIcon.svg" alt="react icon" />
        </div>
        </header>
    );
}