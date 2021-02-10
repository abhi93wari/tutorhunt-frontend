
import React, { Component} from 'react';
import { Form} from 'react-bootstrap';
import {connect} from "react-redux";
import Fuse from 'fuse.js';
import "./dashboard.css"
import axios from 'axios'
import {Button,Grid,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import {MenuIcon} from '@material-ui/icons'

let characters = []




class dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
          query: "",
          cardInfo:[]
        };
    }

    componentWillMount(){
      window.scrollTo(0,0);
      //this.fetchSubjets();  
    }



   

    fetchSubjets = async (e)=>{

    

      //hit the api
      let result = await axios.get("http://localhost:8086/allcourses");
      let res = result.data;
      console.log("data is "+res);
      characters = res;
    }

    handleSearch = (event)=>{
      this.setState({query: event.target.value});
    }

    handleChange = async (event)=>{

      this.setState({query: event.target.value});
    
      const fuse = new Fuse(characters, {
        includeScore:true
      });
      
      const result  = fuse.search(this.state.query);
      console.log(result);

      let str;
      for(let i in result){

        if(typeof(str)=='undefined'){

          str = result[i];

        }

        else if(result[i].score>str.score){
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

      //hit the api and retrive cardinfo

       //hit the api
       
       let result1 = await axios.post("http://localhost:8086/tutorlist",json);
       let res = result1.data;
       console.log("data is "+JSON.stringify(res));


      // this.state.cardInfo= [
      //   {
      //     title:"title1",
      //     text:"text1",
      //     price:"$25/hour"
      //   },
      //   {
      //     title:"title2",
      //     text:"text2",
      //     price:"$24/hour"
      //   },
      //   {
      //     title:"title2",
      //     text:"text2",
      //     price:"$22/hour"
      //   },{
      //     title:"title1",
      //     text:"text1",
      //     price:"$25/hour"
      //   }
      // ]

      this.state.cardInfo = res;
      this.setState();
    }
    

    render(){

      

      let showEmpty = ()=>{
        return(
          <h2>No courses found</h2>
        )
      }

      const renderCard=(card,index) => {

        return(

          <Grid container direction='column'>

            <Grid item >

            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>

            </Grid>

            <Grid item >

            </Grid>

          </Grid>

          
        
        );
      };



    return (
      <>





        </>
      );
    }
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
export default connect(mapStateToProps)(dashboard);