import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home'
import Fire from './Fire'
import MostAffected from "./MostAffected";
import  Food from "./Food";
import Medical from "./Medical";
import Shelter from "./Shelter";

class RouterPage extends  Component{
    render() {
        return(
            <div>
                <Route exact path="/" component={Home}/>

                <Route exact path="/fire" component={Fire}/>

                <Route exact path="/most-affected" component={MostAffected}/>

                <Route exact path="/food" component={Food}/>

                <Route exact path="/medical" component={Medical}/>

                <Route exact path="/shelter" component={Shelter}/>

            </div>
        )
    }
}


export default withRouter(RouterPage);