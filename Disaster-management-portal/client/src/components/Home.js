import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navigation from './Navigation';
//import fire from './../photos/fire.png'
import flood from './../photos/flood.jpg'


class Home extends  Component{
    render() {
        return(
            <div>
                <Navigation />
                <Link to="/fire"><div className="boxes"><h4 className="box-text">
                    FIRE<br/>

                        <img src={flood} style={{ margin: "15px", height: "80px"}}/>


                </h4></div></Link>
                <Link><div className="boxes"><h4 className="box-text">
                    FLOOD<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link><div className="boxes"><h4 className="box-text">
                    CYCLONE<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link><div className="boxes"><h4 className="box-text">
                    HURRICANE<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <div className="message">
                    <h1 style={{ color: "#0b0023"}}><b>HELP YOUR CITY!</b></h1>
                    <h2 style={{ color: "#8424c9"}}><b>TWEET ON TWITTER/ POST ON FACEBOOK/ CALL OUR TOLL FREE NO: 999 999-9999</b></h2>
                    <br/><br/>
                    <p><b>Help us Help you. Post on Facebook, tweet on twitter or call our helpline number to register the disaster. We will
                        reach necessary authorities to help you</b></p>

                </div>
            </div>
        )
    }
}


export default Home;