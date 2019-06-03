import React from "react";

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
                        active_bullet:1,
                        check:0
                    }
    }
    onChange=(num)=>
    {
        if(num===1)
        {
            this.setState({active_svg:single});
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
        this.setState({active_bullet:num})
        const element1=document.getElementsByClassName("bullet")[0];
        const element2=document.getElementsByClassName("bullet")[1];
        const element3=document.getElementsByClassName("bullet")[2];
        const element4=document.getElementsByClassName("bullet")[3];
        element1.style.background="#BB5959";
        element1.style.color="#FFFFFF";
        element1.classList.remove("button-glow");
        element2.style.background="#BB5959";
        element2.style.color="#FFFFFF";
        element2.classList.remove("button-glow");
        element3.style.background="#BB5959";
        element3.style.color="#FFFFFF";
        element3.classList.remove("button-glow");
        element4.style.background="#BB5959";
        element4.style.color="#FFFFFF";
        element4.classList.remove("button-glow");
        const ele=document.getElementsByClassName("bullet")[num-1]
        ele.style.background="#FFFFFF";
        ele.style.color="black";
        ele.classList.add("button-glow");
    }
    onLeft=()=>
    {
        if(this.state.active_bullet===1)
        {   
            this.onChange(4);
        }
        else
        {
            const update=this.state.active_bullet-1
            this.onChange(update);

        }
    }
    onRight=()=>
    {
        if(this.state.active_bullet===4)
        {
            this.onChange(1);
        }
        else
        {
            const update=this.state.active_bullet+1
            this.onChange(update);
        }
    }
    componentDidMount()
    {
        if(this.state.check===0)
        {
            this.onChange(this.state.active_bullet);
            this.setState({check:1});
        }
    }
    render()
    {
        return(
            <div className="page3">
                
                <div className="types">
                    <h1 className="type_heading">Types of Stove Available</h1>
                    <div className="type_para_container">
                        <p className="type_para">Take you pick from the supply chain and participate in agribusiness projects that are<br/>backed up not only by Zou, but also by the best land, family heritage, innovation and<br/>overall superior expertise.</p>
                    </div>
                    <div className="bullet_container">
                        <Bullet number={1} click={this.onChange} active={this.state.active_bullet}  />
                        <Bullet number={2} click={this.onChange} active={this.state.active_bullet}  />
                        <Bullet number={3} click={this.onChange} active={this.state.active_bullet}  />
                        <Bullet number={4} click={this.onChange} active={this.state.active_bullet}  />
                    </div>
                    <img className="type_svg" src={this.state.active_svg}></img>
                    <div className="navigation_type_container">
                        <div className="type_direction" onClick={()=>this.onLeft()}>{"<"}</div>
                        <div className="type_direction" onClick={this.onRight}>{">"}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page3;