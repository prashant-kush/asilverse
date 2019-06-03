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
        
         this.props.click(this.props.number); //updating state for image and styling in Page3.js parent component 
         
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