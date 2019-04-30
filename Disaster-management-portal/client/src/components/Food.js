import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
class Food extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Data: {},
            Data1: {},
            fooddatas: []
        }
    }

    componentDidMount() {

        this.timer = setInterval(()=> this.setfoodcount(), 2000);
        this.timer1 = setInterval(()=> this.setfooddata(), 2000);
    }

    componentWillUnmount() {
        this.timer  = null;
        clearInterval(this.timer);
        this.timer1 = null;
        clearInterval(this.timer1);
    }

    setfoodcount(){
        axios.get(`http://localhost:3001/getfoodcount`)
            .then(res => {
                const food = res.data.results;
                console.log(food);
                let city = [];
                let stuck = [];
                let rescued = [];
                food.forEach(element => {
                    city.push(element.city);
                    stuck.push(element.stuck);
                    rescued.push(element.rescued);
                });
                this.setState({
                    Data: {
                        labels: city,
                        datasets:[
                            {
                                label:'Top 10 cities with Pending Cases ',
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
                                label:'Corresponding cities with number of Resolved Cases ',
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

    setfooddata(){
        axios.get(`http://localhost:3001/getfooddata`)
            .then(res => {
                this.setState({
                    fooddatas: res.data.results
                })
            })
    }



    renderData(){
        return this.state.fooddatas.map((fooddata) => {
                if(fooddata.source == "Twitter") {
                    return (
                        <div className="each-live-twitter" >

                            <p><b>Message: {fooddata.message}</b></p>
                            <p><b>Location: {fooddata.location}</b></p>
                            <p><b>Date: {fooddata.date}</b></p>
                            <p><b>Time: {fooddata.time}</b></p>
                        </div>
                    )
                }

                else if(fooddata.source == "Facebook"){
                    return (
                        <div className="each-live-facebook">
                            <p><b>Message: {fooddata.message}</b></p>
                            <p><b>Location: {fooddata.location}</b></p>
                            <p><b>Date: {fooddata.date}</b></p>
                            <p><b>Time: {fooddata.time}</b></p>
                        </div>
                    )
                }

                else{
                    return (
                        <div className="each-live-helpline">
                            <p><b>Message: {fooddata.message}</b></p>
                            <p><b>Location: {fooddata.location}</b></p>
                            <p><b>Date: {fooddata.date}</b></p>
                            <p><b>Time: {fooddata.time}</b></p>
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
                    <h2 style={{ color: '#8424c9', marginTop: '0px'}}><b>TOP 10 AFFECTED REGIONS</b></h2>
                    <div className="update-1">
                        <h4><b>FOOD-CASES PENDING:</b></h4>
                        <h3><b>43</b></h3>
                    </div>
                    <div className="update-1">
                        <h4><b>FOOD-CASES RESOLVED:</b></h4>
                        <h3><b>43</b></h3>
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
export default withRouter(Food)
