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
<<<<<<< HEAD
          <div>
            <h3>Name:{this.props.myname}</h3>
            <h3>Username:{this.props.username}</h3>
            <h3>Email:{this.props.myemail}</h3>
            <h3>Role:{this.props.role}</h3>
=======
          <div> 
            <h2>Name:{this.props.myname}</h2>
            <h2>Username:{this.props.username}</h2>
            <h2>Email:{this.props.myemail}</h2>
            <h2>Role:{this.props.role}</h2>
>>>>>>> cd6e134b4714f03f68015dd7cb67743382b6201c
          </div>
        </div>
      );
    }
}

<<<<<<< HEAD

=======
>>>>>>> cd6e134b4714f03f68015dd7cb67743382b6201c
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