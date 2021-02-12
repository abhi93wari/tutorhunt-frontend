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

  
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    
    this.state = {
        
        course_name:'',
        age:'',
        gender:'',
        qualification:'',
        objective:'',
        cost:''
      
    };
  }

  loginUser(info) {
    const payload={
        name:this.props.myname,
        course_name:info.course_name,
        age:info.age,
        gender:info.gender,
        qualification:info.qualification,
        objective:info.objective,
        cost:info.cost
    }
    console.log(payload.objective,payload.age);
    fetch('http://localhost:8086/tutor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      // .then(res => res.json())
      .then((data) => {
          
          if(data !== 'Course_Registered'){
           // this.props.handleSuccessfulAuth(data);
           //handleSuccessfulAuth={this.handleSuccessfulAuth}
           
            alert("Course Registered Successfully");
            
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
      course_name:this.state.course_name,
      age:this.state.age,
      gender:this.state.gender,
      qualification:this.state.qualification,
      objective:this.state.objective,
      cost:this.state.cost
    });
   
 }



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
                <a href="#" class="list-group-item list-group-item-action bg-light">Link 2</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Link 3</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Link 4</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Link 4</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Link 5</a>
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
                      <a class="nav-link" href="/sign-in-tutor">logout</a>
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
                <h1 class="mt-4 mb-0 text-gray-800" style={{textTransform: 'capitalize'}}>Welcome {this.props.myname}</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <h3  align='center'>Add a Course</h3>

                    <div className='form-wrapper'>
                    <div className="form-group">
                        <label>Course Name</label>
                        <input name='course_name' type="text" className="form-control" placeholder="Enter course_name" onChange={e => this.setState({course_name:e.target.value})} required/>
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input name='age' type="number" className="form-control" placeholder="Enter Age" onChange={e => this.setState({age:e.target.value})} required/>
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select name='gender' type="text" className="form-control" placeholder="Enter Gender" onChange={e => this.setState({gender:e.target.value})} required>
                          <option value="#">select..</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>                     
                        </select>
                        
                    </div>  

                    <div className="form-group">
                        <label>Qualification</label>
                        <input name='qualification' type="text" className="form-control" placeholder="Enter Qualification" onChange={e => this.setState({qualification:e.target.value})} required/>
                    </div>

                    <div className="form-group">
                        <label>Cost (in Rs)</label>
                        <input name='cost' type="number" pattern='[0-9]*' className="form-control" placeholder="Enter Cost of the course" onChange={e => this.setState({cost:e.target.value})} required/>
                    </div>

                    <div className="form-group">
                        <label>Course Objectice</label>
                        <input name='objective' type="text" className="form-control" placeholder="Enter Course Objective" onChange={e => this.setState({objective:e.target.value})} required/>
                    </div>

                    </div>
                    <div className='submit-button'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>                 
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
    "token":state.token,
    "course_name":state.course_name
}
}
export default connect(mapStateToProps)(dashboard);