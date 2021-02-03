import React, { Component} from 'react';
import {connect} from "react-redux";

class dashboard extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
     // console.log(this.props);
    return (
        <div>
          <div> 
            <h2>Name:{this.props.myname}</h2>
            <h2>Username:{this.props.username}</h2>
            <h2>Email:{this.props.email}</h2>
            <h2>Role:{this.props.role}</h2>
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