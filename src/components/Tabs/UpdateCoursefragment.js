import {React , useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,ListItemText, Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import {connect}  from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
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

function UpdateCourse (props) {

    const classes=useStyles();
    const [course_name,setcourse_name] = useState('');
    const [age,setage] = useState(0);
    const [gender,setgender] = useState('');
    const [qualification,setqualification] = useState('');
    const [fee,setfee] = useState(0);
   


    function loginUser(info) {
        const payload={
            name:props.myname,
            coursename:info.course_name,
            age:info.age,
            gender:info.gender,
            qualification:info.qualification,
            fee:info.fee,
            tutorid:props.tutorid
        }
        console.log(JSON.stringify(payload));
        fetch('http://localhost:8083/Course/updatesubject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
          .then(res => res.json())
          .then((data) => {
              console.log(data.response);
              if(data.response === 'Updated'){
               
                alert("Subject Updated Successfully");
                
              }
              else{
                alert("Subject not Updated Successfully , invalid data entered...");
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
            fee:fee
          });
          document.courseform.reset();
        }
    
    return (
           
            <Card style={{backgroundColor:'#f4f3ef'}} className={classes.card} variant="outlined">
              <form name='courseform'>
                  <Typography variant='h5' align='center'>UPDATE SUBJECT</Typography>
                  
                  <div className='form-wrapper'>
                  <div className="form-group">
                      <label>Subject Name</label>
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
                      <label>Fee (in Rs)</label>
                      <input name='fee' type="number" pattern='[0-9]*' className="form-control" placeholder="Enter fee of the course" onChange={e => setfee(e.target.value)} required/>
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
        
      
    );
};


const mapStateToProps = (state)=> {
    return {
      "myname":state.name,
      "myemail":state.email,
      "role":state.role,
      "token":state.token,
      "course_name":state.course_name,
      "tutorid":state.id
      
  }
  }
  
export default connect(mapStateToProps)(UpdateCourse);
