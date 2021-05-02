import {React , useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {connect} from "react-redux";
import logo from './dash-icon.png';
import Button from '@material-ui/core/Button';
// import { propTypes } from 'react-bootstrap/esm/Image';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Card from '@material-ui/core/Card';
import AddCourse from './Tabs/AddCourseFragment';
import HomeFragment from './Tabs/HomeFragment';
import StudentList from './Tabs/StudentList';

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,

    }),
    backgroundColor:'#1F51FF',
    color:'white'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor:'#1F51FF',
    // backgroundColor:'#F4F3eF',
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
  
}));



function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();

  
  const [open, setOpen] = useState(false);
  const [fragment,setfragment] = useState('');

  const Logout=() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  const loadfragment = () => {
    switch(fragment){
      case "HOME":
        return <HomeFragment />;

      case 'AddCourse':
        return <AddCourse />;
      
      case 'StudentList':
        return <StudentList />;

        case 'Logout':
           {Logout()};
      
      default :
        break;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: 'secondary' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <ThemeProvider theme={font}>
          <img src={logo} style={{marginRight:30}} />
          <Typography variant="h3" display='inline' gutterBottom>
            Tutor-Dashboard
          </Typography>
          <SettingsIcon style={{marginLeft:'auto'}} gutterBottom/>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider/>
        
        <List>           
            <ListItem button onClick={e => setfragment('HOME')}>
              <ListItemIcon style={{color:'white'}}><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={e => setfragment('AddCourse')}>
              <ListItemIcon style={{color:'white'}}><InboxIcon /></ListItemIcon>
              <ListItemText primary="Add Subject" />
            </ListItem>
            <ListItem button >
              <ListItemIcon style={{color:'white'}}><BorderColorIcon /></ListItemIcon>
              <ListItemText primary="Update Subject" />
            </ListItem>
            <ListItem button onClick={e => setfragment('StudentList')}>
              <ListItemIcon style={{color:'white'}}><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Students List" />
            </ListItem>
            {/* <ListItem button >
              <ListItemIcon style={{color:'white'}}><ScheduleIcon /></ListItemIcon>
              <ListItemText primary="Timetable" />
            </ListItem>                                                                            */}
        </List>

        <Divider />
        <Divider/>
        
        <List>           
            <ListItem button >
              <ListItemIcon style={{color:'white'}}><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="View Profile" />
            </ListItem>
            <ListItem button >
              <ListItemIcon style={{color:'white'}}><BorderColorIcon /></ListItemIcon>
              <ListItemText primary="Update Profile" />
            </ListItem>
            <ListItem button onClick={e => setfragment('Logout')}>
              <ListItemIcon style={{color:'white'}}><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {/* <Typography variant='h4'>Welcome {props.myname}</Typography> */}
          {loadfragment()}
      
      </main>
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    "myname":state.name,
    "myemail":state.email,
    "role":state.role,
    "token":state.token,
    "course_name":state.course_name,
    "id":state.id
  }
}

export default connect(mapStateToProps)(MiniDrawer);