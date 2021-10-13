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
                <div className="icons">
                    <i class="fas fa-search"></i>
                    <i class="fas fa-user"></i>
                </div>    
                <form action="" className="search-bar-container">
                    <input type="search" className="search-bar" placeholder="Busca" />
                     <label for="search-bar" className="fas fa-search"></label>   
                </form>
        </header>
    );
}