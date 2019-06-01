import React from "react";
import "./card.css";
import a from "./burner.svg";
import b from "./Mixing Tube.svg";
import c from "./Gas Stove cock.svg";
import d from "./Regulator.svg";
import e from "./Pipes.svg";
import f from "./Regulator Knob.svg";
import g from "./Jet.svg";
import h from "./Panspot.svg";
import i from "./CRC.svg";
import j from "./Dip tray.svg";
import k from "./Body.svg";

class SimpleCard extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
       
        
    render()
    {
    //     if(this.props.path==="a")
    //     v=a; 
    //     else if(this.props.path==="b")
    //     v=b;
    //    else if(this.props.path==="c")
    //    v=c;
    //    else if(this.props.path==="d")
    //    v=d;
    //    else if(this.props.path==="e")
    //    v=e;
        return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={a} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
        );
    }
}
export default SimpleCard;