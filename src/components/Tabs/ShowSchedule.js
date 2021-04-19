import React, { Component,useState,useEffect} from 'react';
import {connect} from "react-redux";
import Fuse from 'fuse.js';
import axios from 'axios'
import {Button,Box,Grid,AppBar,Toolbar,IconButton,Typography,Container, CardContent,Card,CardMedia,TextField,CircularProgress} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {useHistory} from 'react-router-dom';
import Table from '@material-ui/core/Table';

const useStyles = makeStyles((theme) =>({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: 100,
      height: 100,
      margin:10,
      fontSize:60,
      alignItems: 'center'
      
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));
   

function ShowSchedule (props){
  const classes = useStyles();
  const theme = useTheme();
  const [tutorlist,setTutorlist]= useState([[]]);

  
   const show= () =>{
    
    const payload={
      student_id:props.id,
  }
  //console.log(props.id);
  console.log(payload.student_id);
 
  fetch('http://localhost:8086/showSchedule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then((data) => {
        setTutorlist(data.response);
        console.log(tutorlist);
       //history.push("/ShowSchedule");
       
      }
      )
      
  }

  const Logout=() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  
    return(
    <div>
    <AppBar position="static">
    <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    TutorHunt
    </Typography>
    <Button color="inherit" 
    //   onClick={() => {showSchedule(props.id)}}
    >Show Schedule</Button>
    <Button color="inherit"
    onClick={() => {Logout()}}
    >logout</Button>
    </Toolbar>
    </AppBar>

<Card style={{maxWidth: 'auto',
                marginLeft: '20%',
                marginTop: '3%',
                marginRight:'20%',
                padding: '20px 20px',
                }} variant="outlined" m={3} pt={3}
                >
<Box mt={2} alignItems='center' justifyContent="center">
    <Typography align='center' variant='h3' display='block' color='primary'> My Schedule </Typography>
</Box>
<Box mt={3} alignItems='center' justifyContent="center" style={{marginLeft: '15%'}}>
    <Table>
      <tr>
          <th><u>Tutor Name</u></th>
          <th><u>Date</u></th>
          <th><u>Time</u></th>
        </tr>
        {

    tutorlist.map((item,index)=>{
  //console.log("index is "+index);

  return(

          <tr>
            <th>{item.name}</th>
            <th>{item.date}</th>
            <th>{item.time}</th>
          </tr>
        
      
      );
      })
      
      }
      </Table>
            
      </Box>
      <Box mt={5} alignItems='center' justifyContent="center" style={{marginLeft: '40%'}}>
      <Button
              variant="contained"
              color="primary"
              size="large"
              align='center'                
              onClick={show}
            >
              Show List
            </Button> 
            </Box> 
      </Card>
      </div>
      
    );

}

const mapStateToProps = (state)=> {
    return {
      "id": state.id
  }
  }
export default connect(mapStateToProps)(ShowSchedule);