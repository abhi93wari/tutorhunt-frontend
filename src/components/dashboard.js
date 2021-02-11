
import React, { Component} from 'react';
import { CardColumns, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import Fuse from 'fuse.js';

import axios from 'axios'
import {Button,Grid,AppBar,Toolbar,IconButton,Typography,Container, CardContent,Card,CardMedia,TextField} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';




let characters = []





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





function Dashboard(){


  const classes = useStyles();
  const theme = useTheme();


  return (
    <>

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
     TutorHunt
    </Typography>
    <Button color="inherit">Logout</Button>
  </Toolbar>
</AppBar>

<Grid container
  direction="row"
  justify="center"
  alignItems="center"
>


<Grid item xs={2}>
   
</Grid>


    <Grid item xs={5}>

    <TextField 
      variant="outlined"
      label="Enter the Subject"
      margin="normal"
      fullWidth="true"
    >

    </TextField>

    </Grid>

    <Grid item xs={1}>

      

      </Grid>

    <Grid item xs={2}>

    <Button

      variant="contained"
      color="primary"
      size="large"

    >

      Search

    </Button>

    </Grid>

    <Grid item xs={2}>

      

      </Grid>


    </Grid>
   
    <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={2}
>

      <Grid item xs={1}>

      

      </Grid>

      <Grid item xs = {4}>
      <Card className={classes.root}>
      <Avatar className={classes.orange}>S</Avatar>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Name:Sandeep Kumar Jha
          </Typography>
          <Typography variant="subtitle1">
            Qualification:B.Tech
          </Typography>
          <Typography>
            Experience:5 Years
          </Typography>
          <Typography>
            Fee:RS 500/hour
          </Typography>
          
          <Rating name="disabled" value={3.5} disabled precision={0.5} size="small" />
        </CardContent>
        <div className={classes.controls}>
          <Button
           variant="contained"
           color="primary"
           size="large"
          >
            Book
          </Button>
        </div>
      </div>
      
    </Card>
      </Grid>


      <Grid item xs = {4}>
      <Card className={classes.root}>
      <Avatar className={classes.orange}>A</Avatar>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Name:Abhinav Tiwari
          </Typography>
          <Typography variant="subtitle1">
            Qualification:B.Tech
          </Typography>
          <Typography>
            Experience:5 Years
          </Typography>
          <Typography>
            Fee:RS 500/hour
          </Typography>
          
          <Rating name="disabled" value={3.5} disabled precision={0.5} size="small" />
        </CardContent>
        <div className={classes.controls}>
          <Button
           variant="contained"
           color="primary"
           size="large"
          >
            Book
          </Button>
        </div>
      </div>
      
    </Card>
      </Grid>

      <Grid item xs={2}>

      

      </Grid>

      
    </Grid>


    </>
  );
  

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
export default connect(mapStateToProps)(Dashboard);