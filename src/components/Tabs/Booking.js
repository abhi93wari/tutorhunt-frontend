import {React , useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,AppBar,Grid,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"; 
import moment from 'moment';

const drawerWidth = 240;

// const font = createMuiTheme({
//   typography: {
//     fontFamily: [
//       '"Open Sans"', 'TitilliumWeb','Roboto'
//     ].join(','),
//   },});

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
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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
    borderRadius: '1%',
    padding: '20px 20px',
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
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));


function BookingModule(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedDate, setSelectedDate] = useState(new Date(''));
  const [newdate, setnewdate] = useState('');
  const [slots,setSlots] = useState([]);

  const handleDateChange = (date) => {
    //console.log(date);
    var abc = moment(date,'DD-MM-YYYY').format('DD-MM-YYYY');
    setnewdate(abc.toString(abc));
    console.log(newdate);
    setSelectedDate(date);
  };

  const Logout=() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }


const SearchSlot=  (tutorid) => {                         
  const payload={

    tutor_id:tutorid,
    date:newdate,  
    
}
  console.log(tutorid);
  console.log(newdate);
  
  fetch('http://localhost:8084/showSlots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then((data) => {

              console.log(data);
              setSlots(data);
              
              //  props.changeObjective(data.response[0]);                  
              //  window.location.href = '/Booking';   


            
          }
          )


  }



  const SlotBody = () =>{
    if(slots.length===0){

      return(
        <Grid container
          direction="column"
          justify="left"
          alignItems="center"
          spacing={2}
        >

        <Grid item xs = {2}>
          <h5>no Slots available.....</h5>
          
          </Grid>

        </Grid>
      );

    }

    else{
      return(
      slots.map((slot,index)=>{
        //console.log("index is "+index);

        return(
          <Grid item xs = {2}>
              <Box mt={6} direction="column" alignItems="center" justify="center">
              <Button
                   variant="contained"
                    color="primary"
                   size="large"
                   onClick={(data) => console.log()}
                  >
                    {slot}
                  </Button>
                  </Box>
                  </Grid>

        );
      

        

      }));
    }
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
        <Card style={{backgroundColor:'white'}} className={classes.card} variant="outlined" m={3} pt={3}>
              <Box mt={2} alignItems='center' justifyContent="center">
                  <Typography align='center' variant='h3' display='block' color='primary'> Slot Booking </Typography>
              </Box>

              <Typography variant='h5' display='block'> About the Course :</Typography>
              <Typography> {props.objective} </Typography>

              <Box mt={8} alignItems='center' justifyContent="center">
              <Typography> Select Date </Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  // label="Select Date"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
             </Box>
              <Box mt={6} direction="column" alignItems="center" justify="center">
                <Button
                   variant="contained"
                   color="primary"
                   size="large"
                   
                  onClick={() => SearchSlot(props.tutorid)}
                  >

                    Search slot
                  </Button>
    
              </Box>
              <Box mt={6} direction="column" alignItems="center" justify="center">
                <Typography variant='h5'>Available Slots :</Typography>
              </Box>

              <SlotBody/>
              
               
        </Card>
      
      </main>
        
                  
      </div>
   
  );
}

const mapStateToProps = (state)=> {
  return {
    "objective" : state.objective,
    "tutorid"   : state.tutorid
}
}

export default connect(mapStateToProps)(BookingModule);

