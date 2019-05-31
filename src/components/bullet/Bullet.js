import React from "react";
import "./bullet.css"
class Bullet extends React.Component
 {
     constructor(props)
     {
         super(props);
         this.state={run:1, already_active:""}
     }
     onClick=()=>
     {
         this.props.onActivate(this.props.number);
         this.props.click(this.props.number);
         this.setState({run:2})
     }
     render()
     {
        if(this.props.number===this.props.active && this.state.run!==1)
        {
            document.getElementsByClassName("bullet")[this.props.number-1].style.background="#FFFFFF";
            document.getElementsByClassName("bullet")[this.props.number-1].style.color="black";
            document.getElementsByClassName("bullet")[this.props.number-1].classList.add("button-glow");
        }
        else if(this.props.number!==this.props.active && this.state.run!==1)
        {
            document.getElementsByClassName("bullet")[this.props.number-1].style.background="#BB5959";
            document.getElementsByClassName("bullet")[this.props.number-1].style.color="#FFFFFF";
            document.getElementsByClassName("bullet")[this.props.number-1].classList.remove("button-glow");
        }
        return(
            <div className="bullet" onClick={this.onClick}>
                {this.props.number}
            </div>
        );
        
     }

 }
 export default Bullet;