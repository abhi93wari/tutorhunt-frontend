import React, { Component} from 'react';
import {connect} from "react-redux";

class dashboard extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div>
          <div>
            <h3>Name:{this.props.myname}</h3>
            <h3>Username:{this.props.username}</h3>
            <h3>Email:{this.props.myemail}</h3>
            <h3>Role:{this.props.role}</h3>
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