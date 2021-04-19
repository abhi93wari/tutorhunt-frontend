import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import { render } from "react-dom";
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';

const styles = () => ({
    root: {
      display:'flex',
    },

    paper: {
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'50%',
        borderRadius:'50%',
        backgroundColor: '#f4f3ef',
        borderColor: "primary.main"
    },

   
    card: {
      maxWidth: 'auto',
      marginLeft: '20%',
      marginTop: '3%',
      marginRight:'20%',
      borderRadius: '3%'
    },
    
  });

  

class StudentList extends Component {

  
  constructor() {
    super();
    this.state = {
      students: [],
    };
    
    // Binding method
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
        const payload={
            tutor_id:this.props.id,
        }
       console.log(payload.tutor_id);
       
        fetch('http://localhost:8084/showstudents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
          .then(res => res.json())
          .then((data) => {
              console.log("hello");
              this.state.students=data.response;
              console.log(this.state.students);
             
            }
            )
            
      }

      handleClick = () => {
        // force a re-render
        this.forceUpdate();
      };
    
    render(){
      //  const { classes } = this.props;
       console.log("render() method");
       const { students } = this.state;
    return (

        <Card style={{maxWidth: 'auto',
                      marginLeft: '20%',
                      marginTop: '3%',
                      marginRight:'20%',
                      padding: '20px 20px',
                      }} variant="outlined" m={3} pt={3}
                      >
            <Box mt={2} alignItems='center' justifyContent="center">
                    <Typography align='center' variant='h3' display='block' color='primary'> Registered Students </Typography>
            </Box>
          <Box mt={3} alignItems='center' justifyContent="center" style={{marginLeft: '15%'}}>
          <Table>
                    <tr>
                        <th><u>Name</u></th>
                        <th><u>Date</u></th>
                        <th><u>Time</u></th>
                      </tr>
              {

                students.map((item,index) => (
                  
                      <tr>
                        <th>{item.name}</th>
                        <th>{item.date}</th>
                        <th>{item.time}</th>
                      </tr>
                   
                  
                  ))}
                  </Table>
                  
          </Box>
          <Box mt={5} alignItems='center' justifyContent="center" style={{marginLeft: '40%'}}>
              
            <Button
              variant="contained"
              color="primary"
              size="large"
              align='center'                
              onClick={this.handleClick}
            >
              Show List
            </Button>  
          </Box>
        </Card>
       
    );
    }
}

const mapStateToProps = (state)=> {
    return {
      "myname":state.name,
      "myemail":state.email,
      "role":state.role,
      "token":state.token,
      "course_name":state.course_name,
      "id": state.id
  }
  }
  
export default connect(mapStateToProps)(StudentList);
render(<StudentList />, document.getElementById("root"));
withStyles(styles)(StudentList);