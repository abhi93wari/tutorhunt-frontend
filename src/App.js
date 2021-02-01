import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Home from "./components/Home.js";
import Dashboard from "./components/dashboard.js";
import Footer from "./components/footer.js";
import { render } from '@testing-library/react';

export default class App extends Component{
  constructor(){
    super();

    this.state={
      loggedInStatus:"LOGGED_IN"
    };
    
  }
  render(){
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}></Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link"  to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to={"/sign-up"}>Sign-Up</Link>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact
              path={"/sign-in"}
              render={props => (
                <Home
                  {...props}
                  //handleLogin={this.handleLogin}
                  // handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus} 
                  />
                  )}
                  />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
}