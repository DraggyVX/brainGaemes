import React, { Component } from 'react';

class rngButton extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          randomNumber
        };
      }
        rng() {
        var maxNumber = 45;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        return randomNumber;
    }
}

export default rngButton;