import React from "react";
import "./page4.css";
import CarouselCard from "./CarouselCard.js";
import Button from "./../button/Button.js";
var left=0;
class Page4 extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    onSwipeRight=()=>
    {   
        const element=document.getElementsByClassName("slide")[0];
        if(left<this.props.width)
        { left=left+element.offsetWidth/3;
        element.scrollLeft=left;}
    }
    onSwipeLeft=()=>
    {
        const element=document.getElementsByClassName("slide")[0];
        if(left>0)
        {left=left-element.offsetWidth/3;
        element.scrollLeft=left;}
    }
    componentDidMount()
    {
        left=document.getElementsByClassName("slide")[0].scrollLeft;
    }
    render()
    {
        return(
                <div className="page4">
                    <div className="carousel">
                    <h1 className="carousel_heading">Some of the Services<br></br>offered by us...</h1>
                        <div className="slide">
                            <div className="slider">
                            <CarouselCard heading="Buy Individual Parts" />
                            <CarouselCard heading="Contact for repairs"/>
                            <CarouselCard heading="Bulk Orders" />
                            <CarouselCard heading="Buy Individual Parts" />
                            <CarouselCard heading="Contact for repairs" />
                            <CarouselCard heading="Bulk Orders" />
                            </div>
                        </div>
                        <div className="carousel_direction">
                            <div className="carousel_direction_nav" onClick={this.onSwipeLeft}>{"<"}</div>
                            <div className="carousel_direction_nav" onClick={this.onSwipeRight}>{">"}</div>
                        </div>
                    </div>
                    <div className="future">
                        <h2 className="future_heading">
                            The Future of Stove is <span className="asilverse_stove">Asilverse Stove</span>
                        </h2>
                        <div className="button_wrapper">
                            <Button title="Inquire" color="#BB5959" background="white" height="2.25vw" fontSize="1vw" width="11.5vw"/>
                        </div>
                    </div>
                    <hr className="line" />
                    
                </div>
        );
    }
}
export default Page4;