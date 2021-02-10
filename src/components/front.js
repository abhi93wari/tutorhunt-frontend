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

import React,{Component} from 'react';
import {useHistory} from 'react-router-dom';



  

export default class Front extends Component{
    constructor(){
        super();
        this.handletutor=this.handletutor.bind(this);
        this.handlelearner=this.handlelearner.bind(this);
        this.state={
            role:''
        };
    }

    useStyles = makeStyles((theme) => ({

        root:{
            minHeight:'100vh',
            backgroundImage:`url(${Image})`,
            border: 0,
            borderRadius: 3,
      
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
          backgroundColor:'white'
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

      
    history=useHistory;
    handletutor = async e => {
        e.preventDefault();
        this.setState({role:"tutor"});
        this.props.history.push("/sign-in-tutor");
    }
    handlelearner = async e => {
        e.preventDefault();
        this.setState({role:"learner"});
        this.props.history.push('/sign-in');
    }

     
    
    render(){
    var classes = this.useStyles();
    return(
        <Container className={classes.paper}>
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="sign-up-tutor" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </Container>
    );
    }
}
