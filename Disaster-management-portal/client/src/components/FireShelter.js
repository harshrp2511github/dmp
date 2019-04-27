import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './design.css'
import home from './../photos/home.jpg'


class FireShelter extends  Component{
    render() {
        return(
            <div>

                <ul>
                    <li><Link to="/" className="active"  >Home</Link></li>
                    <li><Link to="/fire" >Fire-Events</Link></li>
                    <li><Link >Contact</Link></li>
                    <li className="heading">DISASTER MANAGEMENT PORTAL</li>
                </ul>

                <div>
                    <h1 className="shelter-text"><b>HELP: SHELTER</b></h1>
                </div>

                <div className="shelter-box">
                    <div className="shelter-left">
                        <img src={home} style={{ width: '100px', height: '100%'}} />

                    </div>
                    <div className="shelter-right">
                        <p className="shelter-inner">
                            Message: <i>Help needed for 20 people.</i><br />
                            Date: <i>04/21/2019</i><br />
                            Location: <i>San Francisco</i><br />
                        </p>
                    </div>

                </div>

                <div className="shelter-box">

                </div>




            </div>
        )
    }
}


export default withRouter(FireShelter);