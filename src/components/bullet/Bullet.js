import React from "react";
import "./bullet.css"
class Bullet extends React.Component
 {
     constructor(props)
     {
         super(props);
         
     }
     onClick=()=>
     {
        
         this.props.click(this.props.number);
         
     }
     render()
     {
        return(
            <div className="bullet" onClick={this.onClick}>
                {this.props.number}
            </div>
        );
        
     }

 }
 export default Bullet;