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
import ModalPop from "./../modalPop/ModalPop.js";
class SimpleCard extends React.Component
{
    constructor(props)
    {
        super(props);
    }  
    onClick=()=>
    {
        const element= document.getElementsByClassName("modal_pop")[0];
        element.style.visibility="visible";
        document.getElementsByClassName("modal_card")[0].style.width="60vw";
        document.getElementsByClassName("modal_card")[0].style.height="35vw";
        document.getElementsByClassName("modal_card")[0].style.marginLeft="20vw";
    }
    render()
    {
        if(this.props.path==="a")
            return(
                <div>
                    <ModalPop />
                    <div className="card" onClick={this.onClick}>
                        <h3 className="card_heading">{this.props.heading}</h3>
                        <img className="card_image" src={a} />
                        <para className="card_para">
                            Aliqua anim proident excepteur in consequat enim enim.
                            Officia dolor magna Lorem ut excepteur.
                        </para>
                    </div>
                </div>
            );
        else if(this.props.path==="b")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={b} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="c")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={c} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="d")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={d} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="e")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={e} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="f")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={f} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="g")   
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={g} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="h")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={h} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="i")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={i} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="j")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={j} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
        else if(this.props.path==="k")
            return(
                <div>
                <ModalPop />
                <div className="card" onClick={this.onClick}>
                    <h3 className="card_heading">{this.props.heading}</h3>
                    <img className="card_image" src={k} />
                    <para className="card_para">
                        Aliqua anim proident excepteur in consequat enim enim.
                        Officia dolor magna Lorem ut excepteur.
                    </para>
                </div>
                </div>
            );
    }
}
export default SimpleCard;