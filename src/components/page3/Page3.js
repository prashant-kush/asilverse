import React from "react";
import stove from "./stove.png";
import Bullet from "./../bullet/Bullet.js";
import "./page3.css";
import single from "./single.svg"
const Page3=()=>
{
    return(
        <div className="page3">
            <img className="stove" src={stove}></img>
            <div className="types">
                <h1 className="type_heading">Types of Stove Available</h1>
                <div className="type_para_container">
                    <p className="type_para">Take you pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</p>
                </div>
                <div className="bullet_container">
                    <Bullet number="1" />
                    <Bullet number="2" />
                    <Bullet number="3" />
                    <Bullet number="4" />
                </div>
                <img className="type_svg" src={single}></img>
            </div>
        </div>
    );
}
export default Page3;