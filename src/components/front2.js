import {React , useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from '../bgimage.jpg';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  root:{
    minHeight:'100vh',
    
     alignContent:'center'
  },
  container:{
    // backgroundImage: `url(${Image})`,
    // backgroundRepeat: "repeat",
    // backgroundSize: "cover"
    background:'none',
    marginLeft:'5%',
    marginRight:'15%'

  },
  paper: {
    backgroundImage:`url(${Image})`,
    backgroundSize:'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white',
    padding:'5%',
    marginTop:theme.spacing(20)
  },
  button1:{
    width:'100%',
    padding: '20px 20px',
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    margin: theme.spacing(10,10,10),
  },
  button2:{
    width:'90%',
    padding: '20px 20px',
    '&:hover': {
        backgroundColor: '#FF1493',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    margin: theme.spacing(10,10,10),
  },

  
}));

export default function Front() {
  const classes = useStyles();
  
  let history = useHistory();
 
  useEffect(() => {
    localStorage.clear();
  });

  function handletutor(e){
      e.preventDefault();
    //  this.setState({role:"tutor"});
    localStorage.setItem("role","tutor");
      history.push("/sign-in-tutor");
  }
  function handleStudent(e) {
      e.preventDefault();
      //this.setState({role:"student"});
      localStorage.setItem("role","student");
      history.push('/sign-in-student');
  }

  return (
    <Paper className={classes.root}>
    <Container maxWidth className={classes.paper}>
      <CssBaseline />
        <Box  className={classes.container}>
        <Grid container spacing={10}>
          <Grid item>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size='large'
                className={classes.button1}
                onClick={handletutor}>
                <Typography component="h1" variant="h5">
                    TUTOR
                </Typography>
                </Button>
           </Grid>
      
            <Grid item>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                size='large'
                className={classes.button2}
                onClick={handleStudent}>
                <Typography component="h1" variant="h5">
                    STUDENT
                </Typography>
                </Button>
            </Grid>
         </Grid>
        </Box>
   
    </Container>
    </Paper>
  );
}