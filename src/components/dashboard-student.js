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
import ShowSchedule from './Tabs/ShowSchedule';


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
 

function Dashboard(props){


  const classes = useStyles();
  const theme = useTheme();
  const [fragment,setfragment] = useState('');
  

  const [loading,setLoading] = useState(false);
  const [searchval,setSearchVal] = useState("");
  const [subjects,setSubjects]  = useState([]);
  const [tutors,setTutors] = useState([]);
  
  const [flag,setflag]=useState(0);

  const Logout=() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }


  let history=useHistory();
  const Booking=  (name,cid) => {                         
    const payload={

      name:name,
      courseid:cid,  
      
  }
    console.log(name);
    console.log(cid);
   
    fetch('http://localhost:8086/courseobjective', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
          .then(res => res.json())
          .then((data) => {

                console.log(data.response);
                {props.changeObjective(data.response[0])};                  
                history.push("/Booking");              
              
            }
            )

    // let result = await axios.get("http://localhost:8086/courseobjective");
    // let res = result.data;
    // console.log("data is "+res);
    // result.json();
    // {props.changeObjective(result.objective)};
    // window.location.href = '/Booking';
  }

  
  const showSchedule= () =>{
    history.push("/ShowSchedule");
      
  }


  // const Tutorlist = () =>{
  //   console.log("hello");
  //   <div>
  //   <AppBar position="static">
  //     <Toolbar>
  //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
  //         <MenuIcon />
  //       </IconButton>
  //       <Typography variant="h6" className={classes.title}>
  //       TutorHunt
  //       </Typography>
  //       <Button color="inherit" 
  //       onClick={() => {showSchedule(props.id)}}
  //       >Show Schedule</Button>
  //       <Button color="inherit"
  //       onClick={() => {Logout()}}
  //       >logout</Button>
  //     </Toolbar>
  //   </AppBar>
    
  //   <Card style={{maxWidth: 'auto',
  //                     marginLeft: '20%',
  //                     marginTop: '3%',
  //                     marginRight:'20%',
  //                     padding: '20px 20px',
  //                     }} variant="outlined" m={3} pt={3}
  //                     >
  //   <Box mt={3} alignItems='center' justifyContent="center" style={{marginLeft: '15%'}}>
  //         <Table>
  //           <tr>
  //               <th><u>Name</u></th>
  //               <th><u>Date</u></th>
  //               <th><u>Time</u></th>
  //             </tr>
  //             {

  //     tutorlist.map((item,index)=>{
  //       //console.log("index is "+index);

  //       return(

  //               <tr>
  //                 <th>{item.name}</th>
  //                 <th>{item.date}</th>
  //                 <th>{item.time}</th>
  //               </tr>
              
            
  //           );
  //           })
            
  //           }
  //           </Table>
                  
  //           </Box>
  //           </Card>
  //           </div>
          
  //       }

    
  


  const fetchSubjects = async ()=>{

    setLoading(true);
    console.log("fetching subjects");
  
    //hit the api
    let result = await axios.get("http://localhost:8086/allcourses");
    let res = result.data;
    console.log("data is "+res);
    characters = res;
    setSubjects(res);
    setLoading(false);

  }


  let fetchTutors = async ()=>{

    setLoading(true);

    const fuse = new Fuse(subjects, {
      includeScore:true
    });
    
    const result  = fuse.search(searchval);
    console.log(result);

    let str;
    for(let i in result){

      if(typeof(str)=='undefined'){

        str = result[i];

      }

      else if(result[i].score<str.score){
        str = result[i];
      }

    }

    let json  = {
      "course":" "
    }
    
    //now hit the api
    if(typeof(str)=='undefined'){
      console.log("no match found"); 
    }
    else{
      console.log("search keyword is "+str.item);
      json = {
        "course":str.item
      }
    }

    let result1 = await axios.post("http://localhost:8086/tutorlist",json);
    let res = result1.data;
    console.log("data is "+JSON.stringify(res));
    setTutors(res);

  }

  let handleSearch = (e)=>{

    
    setSearchVal(e.target.value);
    console.log("current val is "+searchval);
  }

  let searchTutor = ()=>{
    
    console.log("current val on button click is  "+searchval);
    setLoading(true);
    fetchTutors();
    setLoading(false);

  }
  useEffect(() => {
    fetchSubjects();
  },[]);



  const MainBody = () =>{
    if(loading){
      return (
          <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >

        <Grid item xs = {6}>
          <h1>Loading...</h1>
          
        </Grid>
          <Grid item xs = {8}>
          <CircularProgress
            size="140"
            thickness={40}

          >

          </CircularProgress>
          </Grid>

        </Grid>
      );
    }
    else if(tutors.length===0){

      return(
        <Grid container
          direction="column"
          justify="left"
          alignItems="center"
          spacing={2}
        >

        <Grid item xs = {2}>
          <h5>no tutor found.....</h5>
          
          </Grid>

        </Grid>
      );

    }

    else{
      return(
      tutors.map((tutor,index)=>{
        //console.log("index is "+index);

        return(

          <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          key = {index}
        
        >
        
              <Grid item xs={1}>
        
              
        
              </Grid>
        
              <Grid item xs = {8}>
              <Card className={classes.root}>
              <Avatar className={classes.orange}>{tutor.name.charAt(0)}</Avatar>
              <div className={classes.details} >
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Name:{tutor.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    Gender:{tutor.gender}
                  </Typography>
                  <Typography>
                    Age:{tutor.age}
                  </Typography>
                  <Typography>
                    Qualification:{tutor.qualification}
                  </Typography>
                  <Typography>
                    Fee:{tutor.fee}
                  </Typography>
                  {props.changetutorid(tutor.tutor_id)}
                  {/* {props.changestudentid()} */}
                  
                  
                  <Rating name="disabled" value={3.5} disabled precision={0.5} size="small" />
                </CardContent>
                <div className={classes.controls}>
                  <Button
                   variant="contained"
                   color="primary"
                   size="large"
                   onClick={() => Booking(tutor.name,tutor.course_id)}
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
        

        );
      

        

      }));
    }
  }




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
    <Button color="inherit" 
    onClick={showSchedule}
    >Show Schedule</Button>
    <Button color="inherit"
    onClick={() => {Logout()}}
    >logout</Button>
  </Toolbar>
</AppBar>


<>
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
      fullWidth
      value={searchval} 
      onChange={handleSearch}
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
      onClick={searchTutor}

    >

      Search

    </Button>

    </Grid>
    
    <Grid item xs={2}>

      

      </Grid>


    </Grid>

    <MainBody/>
   
   </>
  

    </>
  );
  

}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeObjective:(objective)=>{
      dispatch(
       
          {
            "type":"CHANGE_OBJ",
           "payload":objective
          },
        
      )
    },
    changetutorid:(tutorid)=>{
      dispatch(
       
          {
            "type":"CHANGE_TUTORID",
           "payload":tutorid
          },
        
      )
    },
    changeid:(id)=>{
      dispatch(
       
          {
            "type":"CHANGE_ID",
           "payload":id
          },
        
      )
    },

    changetutorlist:(tutorlist)=>{
      dispatch(
       
          {
            "type":"CHANGE_TUTORLIST",
           "payload":tutorlist
          },
        
      )
    },
  }
}

const mapStateToProps = (state)=> {
  return {
    "id": state.id
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);


