import React from "react";
import stove from "./stove.png";
import Bullet from "./../bullet/Bullet.js";
import "./page3.css";
import single from "./single.svg";
import double from "./double.svg";
import triple from "./triple.svg";
import four from "./four.svg";

class Page3 extends React.Component
{
    constructor()
    {
        super();
        this.state=
                    {
                        active_svg:single,
                        active_bullet:1
                    }
    }
    onChange=(num)=>
    {
        if(num===1)
        {
            this.setState({active_svg:single})
        }
        else if(num===2)
        {
            this.setState({active_svg:double})
        }
        else if(num===3)
        {
            this.setState({active_svg:triple})
        }
        else if(num===4)
        {
            this.setState({active_svg:four})
        }
    }
    onActivate=(num)=>
    {
        this.setState({active_bullet:num})
    }
    render()
    {
        console.log(this.state.active_bullet)
        return(
            <div className="page3">
                <img className="stove" src={stove}></img>
                <div className="types">
                    <h1 className="type_heading">Types of Stove Available</h1>
                    <div className="type_para_container">
                        <p className="type_para">Take you pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</p>
                    </div>
                    <div className="bullet_container">
                        <Bullet number={1} click={this.onChange} active={this.state.active_bullet} onActivate={this.onActivate} />
                        <Bullet number={2} click={this.onChange} active={this.state.active_bullet} onActivate={this.onActivate} />
                        <Bullet number={3} click={this.onChange} active={this.state.active_bullet} onActivate={this.onActivate} />
                        <Bullet number={4} click={this.onChange} active={this.state.active_bullet} onActivate={this.onActivate} />
                    </div>
                    <img className="type_svg" src={this.state.active_svg}></img>
                    <div className="navigation_type_container">

                    </div>
                </div>
            </div>
        );
    }
}
export default Page3;