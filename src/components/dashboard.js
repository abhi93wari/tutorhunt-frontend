import React, { Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Switch,Route} from 'react-router-dom';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
import tutorregform from './Tutor-reg-form';


class dashboard extends Component {
  componentDidMount(){
    // Sidebar Toggle Menu Click
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
     });
  }
  Router = () => {
    return (
      <Switch>
         <Route path="/regform" component={tutorregform} />
      </Switch>
    )
  }
  render() {
    return (
      <div className="MainDiv">
        <div class="d-flex" id="wrapper">
            <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="sidebar-heading">TUTORHUNT </div>
              <div class="list-group list-group-flush">
                <a href="/regform" class="list-group-item list-group-item-action bg-light">Registration Form</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
              </div>
            </div>
            <div id="page-content-wrapper">
              <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              
              <div class="container-fluid">
                <h1 class="mt-4" style={{textTransform: 'capitalize'}}>Welcome {this.props.myname}</h1>
                <div className='form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Course Registration</h3>

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

                    <button type="submit" className="btn btn-primary">Sign-Up</button>
                    
                </form>
                </div>
                
                    
              </div>
            </div>
        </div>
      </div>
      
    );
  }
}
const mapStateToProps = (state)=> {
  return {
    "myname":state.name,
    "myemail":state.email,
    "role":state.role,
    "toekn":state.token,
    "username":state.username
}
}
export default connect(mapStateToProps)(dashboard);