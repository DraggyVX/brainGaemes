import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
  <div class="navbar">
      <a href="#" class="toggle" id="navHamburger">
              <i class="fa fa-bars"></i>
      </a>
      <div>lvl: </div>
      <div id="yourLVL"> 0</div>
      <a href="#" class="brand">Username</a>

      <div class="left">
          <a href="#" class="link">Inventory</a>
          <a href="#" class="link">Market</a>
      </div>
      <div class="right">
          <a href="#" class="link">Settings</a>
      </div>
      
  </div>
        );
    }
}

export default Navbar;