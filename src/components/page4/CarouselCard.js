import React from "react";
import "./carouselCard.css";
class CarouselCard extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
                <div className="carousel_card">
                    <h3 className="carousel_card_heading">
                        {this.props.heading}
                    </h3>
                    <p className="carousel_card_para">
                        Elit ullamco culpa id exercitation Lorem laboris adipisicing irure aute.Quis et mollit commodo nisi ad magna nisi proident nulla.Voluptate non non incididunt cillum anim sit laboris.
                    </p>
                </div>
        );
    }
}
export default CarouselCard;