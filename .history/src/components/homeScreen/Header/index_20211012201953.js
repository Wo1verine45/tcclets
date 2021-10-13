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
            feito em Rect
        </div>
        </header>
    );
}