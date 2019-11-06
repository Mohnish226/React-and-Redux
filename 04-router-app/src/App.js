import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/Home'


export default class App extends Component{

  render() {
    return <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Start</span>
            <p>Data Data Data</p>
          </div>
          <div className="card-action">
            <BrowserRouter>
              <div>
                <Route exact path="/" component={Home}/>
              </div>
            </BrowserRouter>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>

  }
}