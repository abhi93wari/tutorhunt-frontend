import React, { Component } from "react";
// import axios from "axios";

import Login from "./login.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
        loggedInStatus:"NOT_LOGGED_IN"
    };
    //this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  

//   handleLogoutClick() {
//     axios
//       .delete("http://localhost:3001/logout", { withCredentials: true })
//       .then(response => {
//         this.props.handleLogout();
//       })
//       .catch(error => {
//         console.log("logout error", error);
//       });
//   }

  render() {
    return (
      <div>
        
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        < Login  loggedInStatus={this.state.loggedInStatus}/>
      </div>
    );
  }
}