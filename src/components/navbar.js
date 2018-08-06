import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
                <div className="navbar">
                    <a href="#" className="toggle" id="navHamburger">
                            <i className="fa fa-bars"></i>
                    </a>
                    <div>lvl: </div>
                    <div id="yourLVL"> 0</div>
                    <a href="#" className="brand">Username</a>

                    <div className="left">
                        <a href="#" className="link">Inventory</a>
                        <a href="#" className="link">Market</a>
                    </div>
                    <div className="right">
                        <a href="#" className="link">Settings</a>
                    </div>
                </div>
        );
    }
}

export default Navbar;