import React from "react";
import "./home.css";
import back from "./back.png";
import Nav from "../../components/nav/Nav.js";
import Button from "./../button/Button.js";

class Home extends React.Component
{
    constructor()
    {
        super();
        
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
                <Button title="Show me more" width="12vw" height="3vw" marginTop="4vw" marginLeft="10vw" fontSize="0.9vw" color="white" background="#BB5959"/>
            </div>

        );
    }
}
export default Home;