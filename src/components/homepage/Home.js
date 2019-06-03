import React from "react";
import "./home.css";
import back from "./back.png";
import Nav from "../../components/nav/Nav.js";
import Button from "./../button/Button.js";

class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    //function for scrolling the web-page to 2nd page on clicking "show more"
    onClick=()=>
    {
        window.scrollBy(0,this.props.width*0.374*1.447);
    }
    render()
    {
        return(
            <div id="home">
                <img id="background" src={back}></img>
                <Nav />
                <h1 className="heading"> Bringing families <br></br>together...since 1990</h1>
                <p className="para">Gas stove's basic desctoption showing what can be achieved using<br/> this revolutionary
                gas stove and all of its main feature can come in<br/> this hero section</p>
                <div className="home_button_wrapper" onClick={this.onClick}>
                    <Button title="Show me more" width="12vw" height="3vw"  fontSize="0.9vw" color="white" background="#BB5959"/>
                </div>
            </div>

        );
    }
}
export default Home;