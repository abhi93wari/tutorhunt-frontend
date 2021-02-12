import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Front from "./components/front2.js"
import SignUp from "./components/signup.js";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import Login from './components/login.js';
import SignInTutor from "./components/login-tutor2.js";
import SignUp_Tutor from "./components/signup_tutor.js";
// import { render } from '@testing-library/react';
import SignIn from "./components/login-student2.js";

export default class App extends Component{
  constructor(){
    super();
    
  }
  
 
  render(){
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' render={props => (
              <Front
                {...props}
                />
                )} />
          <Route exact
            path={"/sign-in-student"}
            render={props => (
              <SignIn setToken={this.setSessionState}
                {...props}                
              />
            )} />
            <Route exact
            path={"/sign-in-tutor"}
            render={props => (
              <SignInTutor
                {...props}
              />
            )} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up-tutor" component={SignUp_Tutor} />
          <Route exact
            path={"/dashboard"}
            render={props => (
              <Dashboard
                {...props} />
                )}/>
        </Switch>
        
      </div>
    </Router>
  );
}
}

