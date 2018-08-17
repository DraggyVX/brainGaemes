import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
                <div className="navbar">
                    <a href="#" className="toggle" id="navHamburger">
                            <i className="fa fa-bars"></i>
                    </a>
                    <div>lvl: </div>
                    <div id="yourlevel"> 0</div>
                    <a href="#" className="brand">Username</a>
                    <div className="left">
                    </div>
                    <div className="right">
                    </div>

                </div>
        );
    }
}

export default Navbar;