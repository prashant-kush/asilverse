import React from "react";
import "./card.css";
const SimpleCard=({heading,path})=>
{
    return(
            <div className="card">
                <h3 className="card_heading">{heading}</h3>
                {/* <svg className="card_image" width="48px" height="54px" viewBox="0 0 48 54" version="1.1">
                    <g id="001" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Burner" fill="#000000" fill-rule="nonzero">
                            <path d={path} id="Shape"></path>
                        </g>
                    </g>
                </svg> */}
                <para className="card_para">
                    Aliqua anim proident excepteur in consequat enim enim.
                    Officia dolor magna Lorem ut excepteur.
                </para>
            </div>
    );
}
export default SimpleCard;