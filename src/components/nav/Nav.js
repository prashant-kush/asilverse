import React from "react";
import fire from "./fire.svg";
import "./nav.css";
const Nav=()=>
{
    return(
        <div className="nav">
            <img src={fire} id="fire" />
            <ul className="nav_bar">
                <li>Home</li>
                <li>Product</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>

    );
}
export default Nav;