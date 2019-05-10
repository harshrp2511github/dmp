import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './design.css'
import city from './../photos/city.jpg'

class Navigation extends  Component{
    render() {
        return(
            <div>

                    <ul className="links">
                        <li><Link to="/" className="active"  >HOME</Link></li>
                        <li><Link to="">CONTACT</Link></li>
                        <li className="heading">CALIFORNIA DISASTER MANAGEMENT</li>
                    </ul>
                    <div className="support">
                    </div>

            </div>
        )
    }
}


export default withRouter(Navigation);