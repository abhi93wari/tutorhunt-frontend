import React, { useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from '../bgimage.jpg';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  '@global': {
    body: {
      backgroundImage:`url(${Image})`,
      opacity:'1'
    },
  },
  root:{
      minHeight:'100vh',
      border: 0,
      borderRadius: 3,
      backgroundSize:'cover'
  },
  container:{
    // backgroundImage: `url(${Image})`,
    // backgroundRepeat: "repeat",
    // backgroundSize: "cover"
    background:'none',
    

  },
  paper: {
    border: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:theme.palette.common.white,
    marginTop:'10%',
    borderRadius:'5%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUpTutor(props) {
  const classes = useStyles();
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [role,setrole]=useState('tutor');
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  let history=useHistory();
          function loginUser(info) {
            const payload={
                  username:info.username,
                  name:info.name,
                  password: info.password,
                  email:info.email,
                  role:info.role
          
            }
            console.log(payload.role);
            fetch('http://localhost:8086/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            })
              .then(res => res.json())
              .then((data) => {
                  if(data.response === 'registered'){

                    // localStorage.setItem("tokenT", JSON.stringify(data.jwttoken));
                    // localStorage.setItem("loginstatus", "true");
                    // if(localStorage.getItem("token") === data.jwttoken){
                      
                    // }
                    history.push("/sign-in-tutor");
                    
                  }
                  else{
                    console.log(data);
                    alert("Bad Credentials...Try again");
                  }
                }
                )
           }
          
        // useEffect(() => {
        //   localStorage.removeItem("tokenT");
        // });
            
         function handleSubmit(e) {
           e.preventDefault();
         
            loginUser({
            username:username,
            name:name,
            password:password,
            email:email,
            role:role
          });
           
         }
  
  return (
    <div className={classes.root}>
    
    <Container  maxWidth='sm' borderRadius='50%' className={classes.paper}>
      <CssBaseline />
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up as Tutor
        </Typography>
        <form className={classes.form} noValidate>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={e => setname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setemail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={e => setusername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setpassword(e.target.value)}
          />
                 
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="sign-in-tutor" variant="body2">
                {"Have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
    
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
   
    </div>
  );
}

export default SignUpTutor;




// import React, { Component } from "react";
// import {useHistory,BrowserRouter as Switch, Route,Link} from "react-router-dom";
// import LoginTutor from "./login_tutor.js";
// import Footer from "./footer.js";

// export default class SignUp extends Component {


//     constructor(props) {
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
        
//         this.state = {
//           username:'',
//           name:'',
//           password:'',
//           email:'',
//           role:''
          
//         };
//       }
//       history=useHistory;
//       loginUser(info) {
//         const payload={
//             username:info.username,
//             name:info.name,
//             password: info.password,
//             email:info.email,
//             role:info.role
//         }
//         console.log(payload.username,payload.email);
//         fetch('http://localhost:8082/api/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(payload)
//         })
//           // .then(res => res.json())
//           .then((data) => {
//               if(data !== 'registered'){
               
//                 this.props.history.push("/sign-in-tutor");
                
//               }
//               else{
//                 alert("Invalid data entered...");
//               }
//             }
//             )
//        }
      
      
        
//      handleSubmit = async e => {
//        e.preventDefault();
//       // loginUser({
//       //    username:this.state.username,
//       //    password:this.state.password
//       //  });
//         this.loginUser({
//             username:this.state.username,
//             name:this.state.name,
//             password:this.state.password,
//             email:this.state.email,
//             role:"tutor"
//         });
       
//      }

//     render() {
//         return (
//           <div className='App' id='root'>
//           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           {/* <Link className="navbar-brand" to={"/sign-in"}></Link> */}
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link"  to={"/sign-in-tutor"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link"  to={"/sign-up-tutor"}>Sign-Up</Link>
//               </li>
//             </ul>
//           </div>
//           <Footer />
//         </div>
//       </nav>
          
//             <div className="auth-wrapper">
//             <div className="auth-inner">
//             <form onSubmit={this.handleSubmit}>
//                 <h3>Sign Up</h3>

//                 <div className="form-group">
//                     <label>Name</label>
//                     <input name='name' type="text" className="form-control" placeholder="Enter Name" onChange={e => this.setState({name:e.target.value})} required />
//                 </div>

//                 <div className="form-group">
//                     <label>Username</label>
//                     <input name='username' type="text" className="form-control" placeholder="Enter Username" onChange={e => this.setState({username:e.target.value})} required/>
//                 </div>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input name='email' type="email" className="form-control" placeholder="Enter email" onChange={e => this.setState({email:e.target.value})} required/>
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input name='password' type="password" className="form-control" placeholder="Enter password" onChange={e => this.setState({password:e.target.value})} required/>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-block">Sign-Up</button>
//                 <p className="forgot-password text-right">
//                     <a href="/sign-in-tutor">Already registered ? Sign-In</a>
//                 </p>

//                 <Switch>
//                     <Route path="/sign-in-tutor" component={LoginTutor} />
//                 </Switch>
//             </form>
//             </div>
//             </div>
//             </div>
//         );
//     }
// }
