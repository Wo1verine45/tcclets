import React from "react";
import './styles.css'; 
import logo from './logo/logo.png'

export default () => {
    return (
        <header>
                <div className="logo-name">
                    <img src={logo}/>
                </div>
                <nav className="navbar-menu">
                    <a href="#">Início</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Canais</a>
                </nav>   
                <form action="" className="search-bar-container">
                    <input type="search" className="search-bar" placeholder="Busca" />
                     <label for="search-bar" className="fa-search"></label>   
                </form>
        </header>
    );
}