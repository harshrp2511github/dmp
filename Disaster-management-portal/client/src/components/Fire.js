import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navigation from './Navigation';
//import fire from './../photos/fire.png'
import flood from './../photos/flood.jpg'


class Fire extends  Component{
    render() {
        return(
            <div>
                <Navigation />
                <Link to="/most-affected"><div className="boxes-1"><h4 className="box-text">
                    TOP 10 REGIONS<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>


                </h4></div></Link>
                <Link><div className="boxes-1"><h4 className="box-text">
                    MEDICAL HELP<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link to="/fire-shelter"><div className="boxes-1"><h4 className="box-text">
                    SHELTER HELP<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <div className="message">
                    <h1 style={{ color: "#0b0023"}}><b>GET MORE INFORMATION!</b></h1>
                    <h2 style={{ color: "#8424c9"}}><b>KNOW ABOUT MOST AFFECTED REGIONS/ PEOPLE WHO NEED MEDICAL HELP/ PEOPLE WHO NEED SHELTER</b></h2>
                    <br/><br/>
                    <p><b>Help us Help you. Post on Facebook, tweet on twitter or call our helpline number to register the disaster. We will
                        reach necessary authorities to help you</b></p>

                </div>
            </div>
        )
    }
}


export default Fire;