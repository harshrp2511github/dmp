import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navigation from './Navigation';
//import fire from './../photos/fire.png'
import flood from './../photos/flood.jpg'
import axios from "axios";
import AnimatedNumber from 'react-animated-number';


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
        axios.get(`http://localhost:3001/getallcount`)
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
                <div className="home-counter">
                    <div className="home-update">
                        <h4><b>TOTAL-CASES OVERALL:</b></h4>
                        <h3><b>
                            <AnimatedNumber component="text" value={this.state.stuck}
                                            style={{
                                                transition: '0.8s ease-out',
                                                fontSize: 48,
                                                transitionProperty:
                                                    'background-color, color, opacity'
                                            }}
                                            frameStyle={perc => (
                                                perc === 100 ? {} : {backgroundColor: '#8424c9'}
                                            )}
                                            duration={300}
                                            />
                        </b></h3>
                    </div>
                    <div className="home-update">
                        <h4><b>TOTAL-CASES RESOLVED:</b></h4>
                        <h3><b>
                            <AnimatedNumber component="text" value={this.state.rescued}
                                            style={{
                                                transition: '0.8s ease-out',
                                                fontSize: 48,
                                                transitionProperty:
                                                    'background-color, color, opacity'
                                            }}
                                            frameStyle={perc => (
                                                perc === 100 ? {} : {backgroundColor: '#8424c9'}
                                            )}
                                            duration={300}
                            />
                        </b></h3>
                    </div>

                </div>
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