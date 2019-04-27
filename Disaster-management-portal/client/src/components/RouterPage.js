import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home'
import Fire from './Fire'
import FireShelter from './FireShelter'
import MostAffected from "./MostAffected";

class RouterPage extends  Component{
    render() {
        return(
            <div>
                <Route exact path="/" component={Home}/>

                <Route exact path="/fire" component={Fire}/>

                <Route exact path="/fire-shelter" component={FireShelter}/>

                <Route exact path="/most-affected" component={MostAffected}/>

            </div>
        )
    }
}


export default withRouter(RouterPage);