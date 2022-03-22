import React from "react";
import img from "../images/kosovo.jpeg";
import './navbar.css';



function Navbar(){
    return(
        <nav>
            <img src={img} alt=""/>
            <h3>KosovoFacts</h3>
            <h4>Republic of Kosovo</h4>
        </nav>
        
    )
    
}

export default Navbar;