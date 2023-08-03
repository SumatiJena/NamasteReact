import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const[btnlogin, setbtnlogin]=useState("login")
    return(
    <div className="header">
        <div className="logo">
            <img src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg"/>
        </div>
        <div className="navitem">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="serviece">Serviece</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><button className="btn-login" style={{background:btnlogin=="login"?"green":"red"}} onClick={()=>btnlogin=="login"?setbtnlogin("logout"):setbtnlogin("login")}>{btnlogin}</button></li>
            </ul>
        </div>
    </div>
    );
}
export default Header;