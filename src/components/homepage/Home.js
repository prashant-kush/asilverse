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
    
    render()
    {
        return(
            <div id="home">
                <img id="background" src={back}></img>
                <Nav />
                <h1 className="heading"> Bringing families <br></br>together...since 1990</h1>
                <p className="para">Gas stove's basic desctoption showing what can be achieved using this revolutionary
                gas stove and all of its main feature can come in this hero section</p>
                <Button margin={this.props.margin} height={this.props.height} font={this.props.font}/>
            </div>

        );
    }
}
export default Home;