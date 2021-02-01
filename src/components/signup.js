import React, { Component } from "react";
import {useHistory,BrowserRouter as Switch, Route} from "react-router-dom";
import Login from "./login.js";

export default class SignUp extends Component {


    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        
        this.state = {
          username:'',
          name:'',
          password:'',
          email:'',
          loggedInStatus:'LOGGED_IN'
        };
      }
      history=useHistory;
      loginUser(info) {
        const payload={
            username:info.username,
            name:info.name,
            password: info.password,
            email:info.email
        }
        console.log(payload.username,payload.email);
        fetch('http://localhost:8082/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
          // .then(res => res.json())
          .then((data) => {
              if(data !== 'registered'){
               // this.props.handleSuccessfulAuth(data);
               //handleSuccessfulAuth={this.handleSuccessfulAuth}
               
                this.props.history.push("/");
                
              }
              else{
                alert("Invalid data entered...");
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
        this.loginUser({
            username:this.state.username,
            name:this.state.name,
            password:this.state.password,
            email:this.state.email
        });
       
     }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input name='name' type="text" className="form-control" placeholder="Enter Name" onChange={e => this.setState({name:e.target.value})} required />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input name='username' type="text" className="form-control" placeholder="Enter Username" onChange={e => this.setState({username:e.target.value})} required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name='email' type="email" className="form-control" placeholder="Enter email" onChange={e => this.setState({email:e.target.value})} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name='password' type="password" className="form-control" placeholder="Enter password" onChange={e => this.setState({password:e.target.value})} required/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign-Up</button>
                <p className="forgot-password text-right">
                    <a href="/sign-in">Already registered ? Sign-In</a>
                </p>

                <Switch>
                    <Route path="/sign-in" component={Login} />
                </Switch>
            </form>
        );
    }
}
