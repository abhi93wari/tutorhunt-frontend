import React, { useEffect, useState } from 'react';
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

export default function SignIn() {
  const classes = useStyles();

  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [role,setrole]=useState('student');
  let history=useHistory();
          function loginUser(credentials) {
            const payload={
                username:credentials.username,
                password: credentials.password,
                role:credentials.role
            }
            console.log(payload.role);
            fetch('http://localhost:8086/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            })
              .then(res => res.json())
              .then((data) => {
                  if(data.jwttoken !== 'T'){
                   // this.setState.loggedInStatus="LOGGED_IN";
                    console.log(data.jwttoken);
                    console.log(data.role);
                    console.log(data.name);
                    // props.changeName(data.name);
                    // this.props.changeToken(data.token)
                    // this.props.changeUser(data.username)
                    // this.props.changeRole(data.role)
                    // this.props.changeEmail(data.email)
                    localStorage.setItem("token", JSON.stringify(data.jwttoken));
                    history.push("/dashboard-student");
                    
                  }
                  else{
                    alert("Bad Credentials...Try again");
                  }
                }
                )
           }
          
          
          useEffect(() => {
            localStorage.removeItem("token");
          });
           
         function handleSubmit(e) {
           e.preventDefault();
          // loginUser({
          //    username:this.state.username,
          //    password:this.state.password
          //  });
            loginUser({username:username,
            password:password,
            role:role});
           
         }
  
  return (
    <div className={classes.root}>
    
    <Container  maxWidth='xs' borderRadius='50%' className={classes.paper}>
      <CssBaseline />
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in as Student
        </Typography>
        <form className={classes.form} noValidate>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/ sign-up-tutor" variant="body2">
                {"Don't have an account? Sign Up"}
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