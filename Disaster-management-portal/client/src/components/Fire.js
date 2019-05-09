import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navigation from './Navigation';
//import fire from './../photos/fire.png'
import flood from './../photos/flood.jpg'
import location from './../photos/locations.png'
import food from './../photos/foodhelp.png'
import medical from './../photos/medical.png'
import shelter from './../photos/sheltericon.png'



class Fire extends  Component{
    render() {
        return(
            <div>
                <Navigation />
                <Link to="/most-affected"><div className="boxesFire"><h4 className="box-text">
                    FIRE REGIONS<br/>

                    <img src={location} style={{ margin: "15px", height: "80px"}}/>


                </h4></div></Link>
                <Link to="/medical"><div className="boxesMedical"><h4 className="box-text">
                    MEDICAL HELP<br/>

                    <img src={medical} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link to="shelter"><div className="boxesShelter"><h4 className="box-text">
                    SHELTER HELP<br/>

                    <img src={shelter} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link to="/food"><div className="boxesFood"><h4 className="box-text">
                    FOOD HELP<br/>

                    <img src={food} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <div className="message-1">
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