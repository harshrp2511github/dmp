import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navigation from './Navigation';
//import fire from './../photos/fire.png'
import flood from './../photos/flood.png'
import fire from './../photos/fire.png'
import cyclone from './../photos/cyclone.png'
import hurricane from './../photos/hurricane.png'
import axios from "axios";
import AnimatedNumber from 'react-animated-number';
const config = require('./config.json');

class Home extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            stuck: 0,
            rescued: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(()=> this.setallcount(), 2000);
    }

    componentWillUnmount() {
        this.timer  = null;
        clearInterval(this.timer);
    }

    setallcount(){
        const req_header = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                credentials: 'include'
            }
        };
        axios.get(config.url+'getallcount', req_header)
            .then(res => {
                console.log(res.data.results[0])
                const n1 = res.data.results[0].AllStuck;
                const n2 = res.data.results[0].AllRescued;

                this.setState({
                    stuck: n1,
                    rescued: n2
                })
            })
    }


        render() {
        return(
            <div>
                <Navigation />
                <Link to="/fire" className="redBorder"><div className="boxes-fire"><h4 className="box-text">
                    FIRE<br/>

                        <img src={fire} style={{ margin: "15px", height: "80px"}}/>


                </h4></div></Link>
                <Link><div className="boxes-flood"><h4 className="box-text">
                    FLOOD<br/>

                    <img src={flood} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link><div className="boxes-cyclone"><h4 className="box-text">
                    CYCLONE<br/>

                    <img src={cyclone} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <Link><div className="boxes-hurricane "><h4 className="box-text">
                    HURRICANE<br/>

                    <img src={hurricane} style={{ margin: "15px", height: "80px"}}/>

                </h4></div></Link>
                <div className="home-counter">
                <h1 className="top20" style={{ color: "grey"}}><b>Live Count</b></h1>
                    <div className="home-update">
                        <h4><b>TOTAL CASES</b></h4>
                        <h3><b>
                            <AnimatedNumber component="text" value={this.state.stuck}
                                            style={{
                                                transition: '0.8s ease-out',
                                                fontSize: 48,
                                                transitionProperty:
                                                    'background-color, color, opacity'
                                            }}
                                            frameStyle={perc => (
                                                perc === 100 ? {} : {backgroundColor: '#ef6958'}
                                            )}

                                            />
                        </b></h3>
                    </div>
                    <div className="home-update">
                        <h4><b>RESOLVED</b></h4>
                        <h3><b>
                            <AnimatedNumber component="text" value={this.state.rescued}
                                            style={{
                                                transition: '0.8s ease-out',
                                                fontSize: 48,
                                                transitionProperty:
                                                    'background-color, color, opacity'
                                            }}
                                            frameStyle={perc => (
                                                perc === 100 ? {} : {backgroundColor: '#ef6958'}
                                            )}

                            />
                        </b></h3>
                    </div>

                </div>
                <div class="clearfix"> </div>
                <div className="message">
                    <h2 style={{ color: "grey"}}><b>TWEET / POST ON FACEBOOK/ CALL OUR TOLL FREE NO: 999 999-9999</b></h2>
                    <br/><br/>
                    <p><b>We will
                        reach necessary authorities to help you</b></p>

                </div>
            </div>
        )
    }
}


export default Home;