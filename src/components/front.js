import React,{Component} from 'react';
import {useHistory} from 'react-router-dom';

export default class Front extends Component{
    constructor(){
        super();
        this.handletutor=this.handletutor.bind(this);
        this.handlelearner=this.handlelearner.bind(this);
        this.state={
            role:''
        };
    }

    history=useHistory;
    handletutor = async e => {
        e.preventDefault();
        this.setState({role:"tutor"});
        this.props.history.push("/sign-in-tutor");
    }
    handlelearner = async e => {
        e.preventDefault();
        this.setState({role:"learner"});
        this.props.history.push('/sign-in');
    }

    
    render(){
    return(
        <div classname='App'>
           
            <div className="auth-wrapper">
            <div className="auth-inner-front">
                <button type='submit' className="btn btn-primary btn-block btn-lg " background-color="#ff4516" onClick={this.handletutor}>TUTOR ?</button>
                <button type='submit' className="btn btn-primary btn-block btn-lg " background-color="#ff4516" onClick={this.handlelearner}>LEARNER ?</button>
            </div>
            </div>
        </div>
    );
    }
}
