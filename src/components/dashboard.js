
import React, { Component} from 'react';
import { CardColumns, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import Fuse from 'fuse.js';

import axios from 'axios'
import {Button,Grid,AppBar,Toolbar,IconButton,Typography,Container, CardContent,Card,CardMedia} from '@material-ui/core'
import {MenuIcon} from '@material-ui/icons'
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';




let characters = []


const useStyles = makeStyles((theme) =>({
  root: {
    display: 'flex',
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
}));





function Dashboard(){


  const classes = useStyles();
  const theme = useTheme();


  return (
    <>
   
    <Grid container
  direction="row"
  justify="center"
  alignItems="center"
>

      <Grid item xs={2}>

      

      </Grid>

      <Grid item xs = {8}>


      <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
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