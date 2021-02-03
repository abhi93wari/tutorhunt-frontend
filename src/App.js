import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Front from "./components/front.js"
import SignUp from "./components/signup.js";
import Home from "./components/Home.js";
import Dashboard from "./components/dashboard.js";
import Login from './components/login.js';
import LoginTutor from "./components/login_tutor.js";
import SignUp_Tutor from "./components/signup_tutor.js";
// import { render } from '@testing-library/react';

export default class App extends Component{
  constructor(){
    super();

    this.state={
      loggedInStatus:"LOGGED_IN",
      message:""
    };
    
  }
  
  callbackFunction = (childData) => {
        this.setState({message: childData})
  }
  render(){
  return (<Router>
    <div>
          <Switch>
            <Route exact path='/' render={props => (
                <Front
                  {...props}
                  parentCallback = {this.callbackFunction}
                  />
                  )} />
            <Route exact
              path={"/sign-in"}
              render={props => (
                <Login
                  {...props}
                  //handleLogin={this.handleLogin}
                  // handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />
              <Route exact
              path={"/sign-in-tutor"}
              render={props => (
                <LoginTutor
                  {...props}
                  //handleLogin={this.handleLogin}
                  // handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-up-tutor" component={SignUp_Tutor} />
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
        
    </div></Router>
  );
}
}

