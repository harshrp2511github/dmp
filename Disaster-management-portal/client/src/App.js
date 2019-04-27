import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import RouterPage from "./components/RouterPage";



class App extends Component {
    render() {
        return (
            <div className="App">

            <BrowserRouter>
                <RouterPage />
            </BrowserRouter>
            </div>
    );
    }
}

export default App;