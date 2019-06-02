import React from "react";
import "./modalPop.css";
class ModalPop extends React.Component
{
    constructor()
    {
        super();
    }
    onClick=()=>
    {
        const element=document.getElementsByClassName("modal_pop")[0];
        element.style.visibility="hidden";
        const modal_card= document.getElementsByClassName("modal_card")[0];
        modal_card.style.width="0vw";
        modal_card.style.height="0vw";
        modal_card.style.marginLeft="50vw";
    }
    render()
    {
        return(
                <div className="modal_pop" onClick={this.onClick}>
                    <div className="modal_card" onClick={this.onClickMod}>
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