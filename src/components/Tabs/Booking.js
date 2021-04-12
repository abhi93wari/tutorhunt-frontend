import {React , useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,AppBar,Grid,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const drawerWidth = 240;

const font = createMuiTheme({
  typography: {
    fontFamily: [
      '"Open Sans"', 'TitilliumWeb','Roboto'
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    backgroundColor:'#F4F3eF',
    color:'#1F51FF'
  },
  
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    padding: theme.spacing(30),
  },
  submit: {
    margin: theme.spacing(3, 100, 10),
  },
  card: {
    maxWidth: 'auto',
    marginLeft: '20%',
    marginTop: '3%',
    marginRight:'20%',
    borderRadius: '2%'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));



function BookingModule(props) {
  const classes = useStyles();
  const theme = useTheme();

  const Logout=() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div className={classes.root}>
      <AppBar >
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
          TutorHunt
          </Typography>
          <Button color="inherit" style={{marginLeft:'auto'}}
           onClick={() => {Logout()}}> logout </Button>
        </Toolbar>
      </AppBar>
    
    
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card style={{backgroundColor:'white'}} className={classes.card} variant="outlined">
              <Typography> About the Course :</Typography>
              <Typography> {props.objective} </Typography>
              
        </Card>
      
      </main>
        
                  
      </div>
   
  );
}

const mapStateToProps = (state)=> {
  return {
    "objective" : state.objective
}
}

export default connect(mapStateToProps)(BookingModule);
