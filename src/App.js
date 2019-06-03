import React from 'react';
import './App.css';
import Home from "./components/homepage/Home.js";
import Page2 from "./components/page2/Page2.js";
import Page3 from "./components/page3/Page3.js";
import Page4 from "./components/page4/Page4.js";
import "circular-std";
class App extends React.Component {
  constructor()
  {
    super();
    this.state=
        {
            width:'1',
            marginButton:"13%",
            heightButton:"48px",
            fontButton:"1em"
        }
        this.myListener=this.onResize.bind(this);
  }
  onResize=()=>
	{
		const w=window.innerWidth;
    this.setState(Object.assign(this.state,{width:w}));
    document.getElementById("home").style.height=this.state.width*0.374*1.447+'px';
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
        <Home />
        <Page2 />
        <Page3 />
        <Page4 width={this.state.width}/>
      </div>
    ); 
  }
}
export default App;
