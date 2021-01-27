import React, { Component } from "react";
import { BrowserRouter as Switch, Route} from "react-router-dom";
import Login from "./login.js";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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
