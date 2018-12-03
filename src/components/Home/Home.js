import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid black'
    }
    return(
      <div className="Home">
        <h1>I'm a Home Component</h1>
        {/* <button 
          style={{
            backgroundColor: 'gray',
            border: '1px solid black'
          }}
        >
          Click me!
        </button> */}
        <button style={buttonStyle}>Click me!</button>
      </div>
    );
  }
}
export default Home;