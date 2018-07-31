import React, { Component } from 'react';
import Navbar from './navbar';
import rngButton from './rngbutton';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <rngButton />
      </div>
      
    );
  }
}

export default Home;