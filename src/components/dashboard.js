
import React, { Component} from 'react';
import { Form} from 'react-bootstrap';
import {connect} from "react-redux";
import Fuse from 'fuse.js';
import "./dashboard.css"
import axios from 'axios'
import {Navbar,Nav,Card,Button,NavDropdown} from 'react-bootstrap'

let characters = [
  {
    "name": "Philip J. Fry",
    "company": "Planet Express",
    "species": "human",
    "thumb": "/images/Philip-J-Fry.png"
  },
  {
    "name": "Turanga Leela",
    "company": "Planet Express",
    "species": "mutant",
    "thumb": "/images/Turanga-Leela.png"
  }
]




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
      this.fetchSubjets();  
    }



   

    fetchSubjets = async (e)=>{

    

      //hit the api
      let result = await axios.get("https://601ed35cb5a0e90017069f85.mockapi.io/subjects");
      let res = result.data;
      console.log("data is "+res);
      characters = res;
    }

    handleChange = (event)=>{


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
      
      //now hit the api
      if(typeof(str)=='undefined'){
        console.log("no match found"); 
      }
      else{
        console.log("search keyword is "+str.item);
      }

      //hit the api and retrive cardinfo


      this.state.cardInfo= [
        {
          title:"title1",
          text:"text1",
          price:"$25/hour"
        },
        {
          title:"title2",
          text:"text2",
          price:"$24/hour"
        },
        {
          title:"title2",
          text:"text2",
          price:"$22/hour"
        },{
          title:"title1",
          text:"text1",
          price:"$25/hour"
        }
      ]

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
        <Card style={{ width: '18rem' }} key = {index}>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
               {card.text}
              </Card.Text>
              <Card.Text>
               {card.text}
              </Card.Text>
              
              <Button variant="primary">{card.price}</Button>
      </Card.Body>
      </Card>
        );
      };
    return (
      <>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">TutorHunt</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


        <form className="search">
            <label>Search</label>
            <input type="text" value={this.state.query} onChange={this.handleChange} />
        </form>

        <button type="submit" className="searchbtn" background-color="#ff4516" onClick = {this.handleChange} >Serach</button>
      
        <div>
          {this.state.cardInfo.length>0 ?this.state.cardInfo.map(renderCard):showEmpty()}
        </div>

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