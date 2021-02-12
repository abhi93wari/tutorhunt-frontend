import {React , useState} from 'react';
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
import { propTypes } from 'react-bootstrap/esm/Image';
import BorderColorIcon from '@material-ui/icons/BorderColor';
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
    backgroundColor:'#F4F3eF',
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
    maxWidth: 1000,
    marginLeft: 320,
    marginTop: 50,
    borderRadius: '2%'
  },
  
}));



function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [course_name,setcourse_name] = useState('');
  const [age,setage] = useState(0);
  const [gender,setgender] = useState('');
  const [qualification,setqualification] = useState('');
  const [cost,setcost] = useState(0);
  const [objective,setobjective] = useState('');

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function loginUser(info) {
    const payload={
        name:props.myname,
        course_name:info.course_name,
        age:info.age,
        gender:info.gender,
        qualification:info.qualification,
        objective:info.objective,
        cost:info.cost
    }
    console.log(payload.objective,payload.age);
    fetch('http://localhost:8086/tutor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      // .then(res => res.json())
      .then((data) => {
          
          if(data !== 'Course_Registered'){
           
            alert("Course Registered Successfully");
            
          }
          else{
            alert("Invalid data entered...");
          }
        }
        )
   }
  
  
   function handleSubmit(e) {
      e.preventDefault();
      loginUser({
        course_name:course_name,
        age:age,
        gender:gender,
        qualification:qualification,
        objective:objective,
        cost:cost
      });
      document.courseform.reset();
    }



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
          <img src={logo} style={{marginRight:'30px'}} />
          <Typography variant="h3" display='inline' gutterBottom>
            Tutor-Dashboard
          </Typography>
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
        <Divider />
        <List>
          {['Add Course','Update Course','Students', 'TimeTable','Revenue'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <BorderColorIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>
        <Divider />
        <List>
          {['View Profile', 'Update Profile','Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <BorderColorIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Typography variant='h4'>Welcome {props.myname}</Typography>
        <Typography>
          <Card style={{backgroundColor:'#f4f3ef'}} className={classes.card} variant="outlined">
            <form name='courseform'>
                <Typography variant='h5' align='center'>ADD A COURSE</Typography>
                
                <div className='form-wrapper'>
                <div className="form-group">
                    <label>Course Name</label>
                    <select name='course_name' type="text" className="form-control" placeholder="Enter course name" onChange={e => setcourse_name(e.target.value)} required>
                      <option value="#">select..</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="ReactJs">ReactJs</option>
                      <option value="SpringBoot">SpringBoot</option>                     
                    </select>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input name='age' type="number" className="form-control" placeholder="Enter Age" onChange={e => setage(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select name='gender' type="text" className="form-control" placeholder="Enter Gender" onChange={e => setgender(e.target.value)} required>
                      <option value="#">select..</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>                     
                    </select>
                    
                </div>

                <div className="form-group">
                    <label>Qualification</label>
                    <input name='qualification' type="text" className="form-control" placeholder="Enter Qualification" onChange={e => setqualification(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Cost (in Rs)</label>
                    <input name='cost' type="number" pattern='[0-9]*' className="form-control" placeholder="Enter Cost of the course" onChange={e => setcost(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Course Objectice</label>
                    <input name='objective' type="text" className="form-control" placeholder="Enter Course Objective" onChange={e => setobjective(e.target.value)} required/>
                </div>

                </div>
                <div className='submit-button'>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size='large'
                    className={classes.submit} onClick={handleSubmit}>submit</Button>
                  
                </div>
                   
            </form>
            </Card>
        </Typography>
        <Typography paragraph>
        </Typography>
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
    "course_name":state.course_name
}
}

export default connect(mapStateToProps)(MiniDrawer);