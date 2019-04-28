import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class MostAffected extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/gettop10`)
            .then(res => {
                const fire = res.data.results;
                console.log(fire);
                let cityname = [];
                let citycount = [];
                fire.forEach(element => {
                    cityname.push(element.name);
                    citycount.push(element.count);
                });
                this.setState({
                    Data: {
                        labels: cityname,
                        datasets:[
                            {
                                label:'Top 10 cities with Pending Cases ',
                                data: citycount ,
                                backgroundColor:[
                                    'rgba(255,30,30,0.8)',
                                    'rgba(155,100,210,0.8)',
                                    'rgba(90,178,255,0.8)',
                                    'rgba(240,134,67,0.8)',
                                    'rgba(120,120,120,0.8)',
                                    'rgba(250,55,197,0.8)',
                                    'rgba(148,244,129,0.8)',
                                    'rgba(244,228,128,0.8)',
                                    'rgba(247,171,133,0.8)',
                                    'rgba(255,91,91,0.8)',
                                    'rgba(91,153,255,0.8)'
                                ]
                            }
                        ]
                    }
                });
            })
    }
    render()
    {
        return(
            <div>

                <ul>
                    <li><Link to="/" className="active"  >Home</Link></li>
                    <li><Link to="/fire" >Fire-Events</Link></li>
                    <li><Link >Contact</Link></li>
                    <li className="heading">DISASTER MANAGEMENT PORTAL</li>
                </ul>
                <br />
                <h2 style={{ color: '#8424c9'}}><b>TOP 10 AFFECTED REGIONS</b></h2>
                <br />
                <div className="graph1">
                    <Bar
                        data = {this.state.Data}
                        options = {{ maintainAspectRatio: false }} />
                </div>
                <div className="graph2">
                    <Bar
                        data = {this.state.Data}
                        options = {{ maintainAspectRatio: false }} />
                </div>
                <div className="right-feed">
                    <h4 style={{ color: "#8424c9"}}><b>LIVE FEED</b></h4>

                </div>
            </div>
        )
    }
}
export default withRouter(MostAffected)

