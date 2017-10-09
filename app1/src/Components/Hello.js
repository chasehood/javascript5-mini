import React, { Component } from 'react';
import '../App.css';


class Hello extends Component {
    constructor(){
        super();
        this.state = {
        myName: 'Calculator',
        display: '0',
        operator:'',
        temp:0,
        resetDisplay: false 
        }
    }

  render() {
    return (
      <div className="App">
        { this.state.myName }
      </div>
    );
  }
}

export default Hello;