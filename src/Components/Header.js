import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const[btnlogin, setbtnlogin]=useState("login")
    return(
    <div className="header flex justify-between bg-purple-100 shadow-sm sm:bg-green-200">
        <div className="logo w-20">
            <img src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg"/>
        </div>
        <div className="navitem">
            <ul className="flex items-center p-10"> 
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="serviece">Serviece</Link></li>
                <li className="px-4"><Link to="contact">Contact</Link></li>
                <li className="px-4"><Link to="grocery">Grocery</Link></li>
                <li><button className="btn-login rounded-lg px-3 py-2" style={{background:btnlogin=="login"?"green":"red"}} onClick={()=>btnlogin=="login"?setbtnlogin("logout"):setbtnlogin("login")}>{btnlogin}</button></li>
            </ul>
        </div>
    </div>
    );
}
export default Header;