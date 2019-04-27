import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './design.css'
import city from './../photos/city.jpg'

class Navigation extends  Component{
    render() {
        return(
            <div>

                    <ul>
                        <li><Link to="/" className="active"  >Home</Link></li>
                        <li><Link to="/fire" >Fire-Events</Link></li>
                        <li><Link >Contact</Link></li>
                        <li className="heading">DISASTER MANAGEMENT PORTAL</li>
                    </ul>
                    <div className="support">
                        <img src={city} className="city"  />
                    </div>

            </div>
        )
    }
}


export default withRouter(Navigation);