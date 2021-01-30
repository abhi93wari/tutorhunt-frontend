import React, { Component} from 'react';
import { BrowserRouter as  Switch, Route } from "react-router-dom";
import {useHistory} from "react-router-dom";
import SignUp from "./signup.js";


   
export default class Login extends Component {

          constructor(props) {
            super(props);
            this.handleSubmit=this.handleSubmit.bind(this);
            
            this.state = {
              username:'',
              password:'',
              loggedInStatus:'LOGGED_IN'
            };
          }
          history=useHistory;
          loginUser(credentials) {
            const payload={
                username:credentials.username,
                password: credentials.password
            }
            console.log(payload.username);
            fetch('http://localhost:8080/authenticate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            })
              .then(res => res.json())
              .then((data) => {
                  if(data.token !== 'T'){
                   // this.props.handleSuccessfulAuth(data);
                   //handleSuccessfulAuth={this.handleSuccessfulAuth}
                    this.setState.loggedInStatus="LOGGED_IN";
                    this.props.history.push("/dashboard");
                    
                  }
                  else{
                    alert("Bad Credentials...Try again");
                  }
                }
                )
           }
          
          
            
         handleSubmit = async e => {
           e.preventDefault();
          // loginUser({
          //    username:this.state.username,
          //    password:this.state.password
          //  });
            this.loginUser({username:this.state.username,
            password:this.state.password});
           
         }
  
    render() {


        return (
            <div class='card-title mt-3'>
          
            <form onSubmit={this.handleSubmit}>
                
                <h3 font-style=''>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input name="username" type="text" className="form-control" placeholder="Enter username" onChange={e => this.setState({username:e.target.value})} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={e => this.setState({password:e.target.value})} required/>
              </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" background-color="#ff4516" >LOGIN</button>
                <div>
                <p className="forgot-password text-center" >
                  <a href="/sign-up">Not Registered ? Sign-Up</a> 
                </p>
               
                <p className="forgot-password text-center"> 
                  <a href="#">Forgot Password ?</a>
                </p>
                </div>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    
                </Switch>
            </form>
            </div>
        );
    }
}
