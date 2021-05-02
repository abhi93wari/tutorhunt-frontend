import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Front from "./components/front2.js"
import SignUp from "./components/signup.js";
import Dashboard from "./components/Dashboard.js";
import Login from './components/login.js';
import SignInTutor from "./components/login-tutor2.js";
import SignUp_Tutor from "./components/signup_tutor.js";
// import { render } from '@testing-library/react';
import SignIn from "./components/login-student2.js";
import Protected from './components/Protected';
import Protected2 from './components/Protected2';
import Protected3 from './components/Protected3';
import StudentDashboard from './components/dashboard-student';
import Booking from './components/Tabs/Booking';
import ShowSchedule from './components/Tabs/ShowSchedule';


export default class App extends Component{
  constructor(){
    super();
    process.title = myApp;
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
          <Protected exact
            path={"/sign-in-student"}
            component={SignIn} 
            />
            <Protected exact
              path={"/sign-in-tutor"}
              component={SignInTutor}
              />
            
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up-tutor" component={SignUp_Tutor} />
          
          <Protected2 exact
            path={"/dashboard"}
            component={Dashboard}
            />
          <Protected3 exact
            path={"/dashboard-student"}
            component={StudentDashboard}
          />
          <Route path={"/Booking"}
            component={Booking}
          />
          <Route path={"/ShowSchedule"}
          component={ShowSchedule} />
        </Switch>
        
      </div>
    </Router>
  );
}
}

