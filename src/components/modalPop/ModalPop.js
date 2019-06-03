import React from "react";
import "./modalPop.css";
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
class ModalPop extends React.Component
{
    constructor()
    {
        super();
    }
    //function for closing the modal window and related animation reset
    onClick(n)
    {
        const element=document.getElementsByClassName("modal_pop")[n];
        element.style.visibility="hidden";
        const modal_card= document.getElementsByClassName("modal_card")[n];
        modal_card.style.width="0vw";
        modal_card.style.height="0vw";
        modal_card.style.marginLeft="50vw";
    }
    render()
    {
        //rendering modals based on the path props fed to this component
        if(this.props.path==="a")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(0)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={a} className="modal_image" />
                            <p className="modal_image_heading">Burner</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="b")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(1)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={b} className="modal_image" />
                            <p className="modal_image_heading">Mixing Tubes</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="c")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(2)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={c} className="modal_image" />
                            <p className="modal_image_heading">Gas Stove Cock</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="d")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(3)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={d} className="modal_image" />
                            <p className="modal_image_heading">Gas Regulator</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="e")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(4)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container"> 
                            <img src={e} className="modal_image" />
                            <p className="modal_image_heading">Gas Pipe/Hose</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="f")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(5)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={f} className="modal_image" />
                            <p className="modal_image_heading">Regulator Knob</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="g")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(6)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={g} className="modal_image" />
                            <p className="modal_image_heading">Jet</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="h")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(7)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={h} className="modal_image" />
                            <p className="modal_image_heading">Panspot</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="i")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(8)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={i} className="modal_image" />
                            <p className="modal_image_heading">CRC Gas Stove Pipe</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="j")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(9)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={j} className="modal_image" />
                            <p className="modal_image_heading">Drip Tray</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    if(this.props.path==="k")
        return(
                <div className="modal_pop" onClick={()=>this.onClick(10)}>
                    <div className="modal_card" onClick={this.onClickMod}>
                        <div className="modal_image_container">
                            <img src={k} className="modal_image" />
                            <p className="modal_image_heading">Body</p>
                        </div>
                        <div className="modal_card_inside_wrapper">
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                            <div className="modal_card_inside">
                            </div>
                        </div>
                        <p className="modal_heading">
                            Ea aliquip irure irure aliquip minim anim voluptate esse.
                        </p>
                        <p className="modal_para">
                            Reprehenderit ut officia ipsum enim proident sit laborum id culpa do deserunt commodo aliqua.<br></br>
                            Veniam est deserunt deserunt fugiat labore ex sit.
                        </p>
                    </div>
                </div>
        );
    }
}
export default ModalPop;