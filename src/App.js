import React from 'react';
import './App.css';
import Home from "./components/homepage/Home.js";
import Page2 from "./components/page2/Page2.js";
import Page3 from "./components/page3/Page3.js";



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
    // document.getElementById("body").style.backgroundSize=`${this.state.width}px 4320px`;
    if(w<=1366 && w>1200)
    {this.setState({marginButton:"10%",heightButton:"38px",fontButton:"0.8em"})}
    else if(w<=1200 && w>900)
    {this.setState({marginButton:"8%",heightButton:"34px",fontButton:"0.7em"})}
    else if(w<=900 && w>800)
    {this.setState({marginButton:"7%",heightButton:"34px",fontButton:"0.7em"})}
    else if(w<=800 && w>700)
    {this.setState({marginButton:"7%",heightButton:"30px",fontButton:"0.6em"})}
    else if(w<=700 && w>650)
    {
      this.setState({marginButton:"7%",heightButton:"28px",fontButton:"0.5em"})
    }
    else if(w<=650 && w>500 )
    {
      this.setState({marginButton:"5%",heightButton:"18px",fontButton:"0.3em"})
    }
    else if(w<=500)
    {
      this.setState({marginButton:"3%",heightButton:"18px",fontButton:"0.3em"})
    }
    else
    {this.setState({marginButton:"13%",heightButton:"48px",fontButton:"1em"})}
	}
  componentDidMount()
  {
      
      this.onResize();
      window.addEventListener("resize",this.myListener);
      // const width = document.getElementById("background").width;
      console.log(this.state.width)
      
  }
  componentWillUnmount()
	{
		window.removeEventListener("resize",this.myListener);
		
  }
  render()
  {
    // console.log(this.state.width);
    
    return (
      <div className="App">
        <Home margin={this.state.marginButton} height={this.state.heightButton} font={this.state.fontButton} />
        <Page2 />
        <Page3 />
      </div>
    );
    
  }
}

export default App;
