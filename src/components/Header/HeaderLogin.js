import React from "react";
import './HeaderMain.css'; 
import logo from '../../assets/LETSFLIX.png'

export default ({bg}) => {
    return (
        <header className={bg ? 'bg' : ''}>
                <div className="logo-name">
                    <img src={logo} alt="letsflix"/>
                </div>
                <div className="logo-user">
                    <img src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=" Usuario"></img>
                </div>
        </header>
    )
};