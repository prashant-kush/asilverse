import React from 'react';
import './App.css';
import Home from "./components/homepage/Home.js";
import Page2 from "./components/page2/Page2.js";
import Page3 from "./components/page3/Page3.js";
import Page4 from "./components/page4/Page4.js";
import "circular-std";//importing required font
class App extends React.Component {
  constructor()
  {
    super();
    this.state=
        {
            width:'1', //state for the viewport width
        }
        this.myListener=this.onResize.bind(this); //binding event listener
  }
  //function triggered when resize takes place
  onResize=()=>
	{
		const w=window.innerWidth;
    this.setState(Object.assign(this.state,{width:w}));
    document.getElementById("home").style.height=this.state.width*0.374*1.447+'px';
    // document.getElementsByClassName("body").style.backgroundSize=`${this.state.width} auto`;
	}
  componentDidMount()
  {
      this.onResize();
      window.addEventListener("resize",this.myListener);
  }
  componentWillUnmount()
	{
		window.removeEventListener("resize",this.myListener);
  }
  render()
  {
    return (
      <div className="App">
        <Home width={this.state.width}/>
        <Page2 />
        <Page3 />
        <Page4 width={this.state.width}/>
      </div>
    ); 
  }
}
export default App;
