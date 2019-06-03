import React from "react";
import "./page2.css";
import SimpleCard from "./../card/Card.js";
import stove from "./stove.png";
class Page2 extends React.Component
{
    constructor()
    {
        super();
       
    }
    
    render()
    {
          return(
                <div className="page2">
                    <h1 className="heading2">Lets understand the working</h1>
                    <p className="para2">The Gas stove that we make is divided into several different pieces<br></br>
                    and here is the part by part description of the same </p>
                    <div className="card_album">
                        <SimpleCard path="a" heading="Burner" />
                        <SimpleCard path="b" heading="Mixing Tubes" />
                        <SimpleCard path="c" heading="Gas Stove Cock" />
                        <SimpleCard path="d" heading="Gas Regulator" />
                        <SimpleCard path="e" heading="Gas Pipe/Hose" />
                        <SimpleCard path="f" heading="Regulator Knob" />
                        <SimpleCard path="g" heading="Jet" />
                        <SimpleCard path="h" heading="Panspot" />
                        <SimpleCard path="i" heading="CRC gas stove pipe" />
                        <SimpleCard path="j" heading="Drip tray" />
                        <SimpleCard path="k" heading="Body" />

                    </div>
                    <img className="stove" src={stove}></img>
                    <div className="shadow"></div>
                </div>

            );
    }
}
export default Page2;