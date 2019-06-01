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
        if(this.props.path==="a")
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
        else if(this.props.path==="b")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={b} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="c")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={c} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="d")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={d} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="e")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={e} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="f")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={f} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="g")   
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={g} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="h")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={h} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="i")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={i} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="j")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={j} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
        else if(this.props.path==="k")
            return(
                <div className="card">
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={k} />
                
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
            );
    }
}
export default SimpleCard;