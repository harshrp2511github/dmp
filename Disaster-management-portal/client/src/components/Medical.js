import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import AnimatedNumber from 'react-animated-number';
import facebook from './../photos/facebook.png';
import twitter from './../photos/twitter.jpg';
import helpline from './../photos/helpline.jpg'

class Medical extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {},
            Data1: {},
            medicaldatas: [],
            stuck: 0,
            rescued: 0
        }
    }

    componentDidMount() {

        this.timer = setInterval(()=> this.setmedicalcount(), 2000);
        this.timer1 = setInterval(()=> this.setmedicaldata(), 2000);
        this.timer2 = setInterval(()=> this.setallcount(), 2000);
    }

    componentWillUnmount() {
        this.timer  = null;
        clearInterval(this.timer);
        this.timer1 = null;
        clearInterval(this.timer1);
        this.timer2 = null;
        clearInterval(this.timer2);
    }

    setmedicalcount(){
        const req_header = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                credentials: 'include'
            }
        };
        axios.get(`http://ec2-34-218-233-42.us-west-2.compute.amazonaws.com:3001/getmedicalcount`, req_header)
            .then(res => {
                const medical = res.data.results[0].data.sort(function(a, b){return b.stuck-a.stuck}).slice(0,10);
                //console.log(medical);
                let city = [];
                let stuck = [];
                let rescued = [];
                medical.forEach(element => {
                    city.push(element.city);
                    stuck.push(element.stuck);
                    rescued.push(element.rescued);
                });
                this.setState({
                    Data: {
                        labels: city,
                        datasets:[
                            {
                                label:'TOP 10 CITIES WITH MEDICAL CASES REGISTERED',
                                data: stuck ,
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

                this.setState({
                    Data1: {
                        labels: city,
                        datasets:[
                            {
                                label:'CORRESPONDING CITIES WITH NO OF CASES RESOLVED',
                                data: rescued ,
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

    setmedicaldata(){
        const req_header = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                credentials: 'include'
            }
        };
        axios.get(`http://ec2-34-218-233-42.us-west-2.compute.amazonaws.com:3001/getmedicaldata`, req_header)
            .then(res => {
                console.log(res.data.results)
                this.setState({
                    medicaldatas: res.data.results
                })
            })
    }

    setallcount(){
        const req_header = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                credentials: 'include'
            }
        };
        axios.get(`http://ec2-34-218-233-42.us-west-2.compute.amazonaws.com:3001/getallcount`, req_header)
            .then(res => {
                console.log(res.data.results[0])
                const n1 = res.data.results[0].MedicalStuck;
                const n2 = res.data.results[0].MedicalRescued;

                this.setState({
                    stuck: n1,
                    rescued: n2
                })
            })
    }





    renderData(){
        return this.state.medicaldatas.map((medicaldata) => {
                    if(medicaldata.source == "twitter") {
                        return (
                            <div>
                                <div className="card-body" style={{
                                    width: "92%",
                                    margin: "4%",
                                    backgroundColor: "white",
                                    borderRadius: "5%",
                                    paddingBottom: "2%"
                                }}>
                                    <img className="card-body" src={twitter} style={{width: "100%", height: "100px",float: "left", marginBottom: "2%", borderRadius: "5% 5% 0 0"}}/>
                                    <h5 className="card-title" style={{width: "100%", textAlign: "left", marginLeft: "2%", marginTop: "2%"}}>Location: {medicaldata.location} </h5>
                                    <p className="card-text" style={{width: "100%", textAlign: "left", marginLeft: "2%"}}>Message: {medicaldata.message}</p>
                                </div>
                            </div>
                        )
                    }
                    else if(medicaldata.source == "fb"){
                        return (
                            <div>
                                <div className="card-body" style={{
                                    width: "92%",
                                    margin: "4%",
                                    backgroundColor: "white",
                                    borderRadius: "5%",
                                    paddingBottom: "2%"
                                }}>
                                    <img className="card-body" src={facebook} style={{width: "100%", height: "100px",float: "left", marginBottom: "2%", borderRadius: "5% 5% 0 0"}}/>
                                    <h5 className="card-title" style={{width: "100%", textAlign: "left", marginLeft: "2%", marginTop: "2%"}}>Location: {medicaldata.location} </h5>
                                    <p className="card-text" style={{width: "100%", textAlign: "left", marginLeft: "2%"}}>Message: {medicaldata.message}</p>
                                </div>
                            </div>
                        )
                    }
                    else{
                        return (
                            <div>
                                <div className="card-body" style={{
                                    width: "92%",
                                    margin: "4%",
                                    backgroundColor: "white",
                                    borderRadius: "5%",
                                    paddingBottom: "2%"
                                }}>
                                    <img className="card-body" src={helpline} style={{width: "100%", height: "100px",float: "left", marginBottom: "2%", borderRadius: "5% 5% 0 0"}}/>
                                    <h5 className="card-title" style={{width: "100%", textAlign: "left", marginLeft: "2%", marginTop: "2%"}}>Location: {medicaldata.location} </h5>
                                    <p className="card-text" style={{width: "100%", textAlign: "left", marginLeft: "2%"}}>Message: {medicaldata.message}</p>
                                </div>
                            </div>
                        )
                    }

                    }
                    )
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

                <div className="counter">
                    <h2 style={{ color: '#8424c9', marginTop: '0px'}}><b>TOP 10 CITIES WITH MEDICAL CASES</b></h2>
                    <div className="update-1">
                        <h5><b>MEDICAL-CASES RESOLVED:</b></h5>
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

                            />
                        </b></h3>
                    </div>
                    <div className="update-1">
                        <h5><b>MEDICAL-CASES OVERALL:</b></h5>
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

                            />
                        </b></h3>
                    </div>
                </div>
                <div className="graph1">
                    <Bar
                        data = {this.state.Data}
                        options = {{ maintainAspectRatio: false }} />
                </div>
                <div className="graph2">
                    <Bar
                        data = {this.state.Data1}
                        options = {{ maintainAspectRatio: false }} />
                </div>
                <div className="right-feed">
                    <h4 style={{ color: "#8424c9"}}><b>LIVE FEED</b></h4>
                    {this.renderData()}
                </div>
            </div>
        )
    }
}
export default withRouter(Medical)