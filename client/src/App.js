import React, { Component } from "react";
import Fade from 'react-reveal/Fade'
import Home from './Pages/Home/Home'
import SideNav from './Components/SideNav/SideNav'
import "./App.css";

class App extends Component {
  state = {
    show: true
  }
  handleShow = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    
    return (
      <div className="App">
      <h3 className='ham' onClick={this.handleShow}>Menu</h3>
      <SideNav menuClicked={this.handleShow} show={this.state.show}/>
      <div className={this.state.show ? 'Page' : 'Full'}>
        <Home />
      </div>
      </div>
    );
  }
}

export default App;
