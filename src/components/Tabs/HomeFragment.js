import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
    },

    paper: {
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'10%',
        borderRadius:'5%',
        backgroundColor: '#f4f3ef',
        borderColor: "primary.main"
    },

    submit: {
      margin: theme.spacing(3, 100, 10),
    },
    card: {
      maxWidth: 'auto',
      marginLeft: '20%',
      marginTop: '3%',
      marginRight:'20%',
      borderRadius: '3%'
    },
    
  }));

const HomeFragment = (props) => {

    const classes=useStyles(); 
    return (
        <Container  maxWidth='xs' borderRadius='50%' className={classes.paper}>
            <Typography variant='h3' align='center'>
                Welcome {props.myname} to your Profile
            </Typography>
        </Container>
    );
};

const mapStateToProps = (state)=> {
    return {
      "myname":state.name,
      "myemail":state.email,
      "role":state.role,
      "token":state.token,
      "course_name":state.course_name
  }
  }
  
  export default connect(mapStateToProps)(HomeFragment);