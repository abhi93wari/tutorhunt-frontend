import { render } from '@testing-library/react';
import React from 'react';
import { Redirect,Route } from 'react-router-dom';
import Dashboard from "./Dashboard"
import Front from './front2';

const Protected = ({component:Cmp,...rest}) => (
    <Route
    {...rest}
        render={(props) => (
            localStorage.getItem('token')?(
            <Cmp {...props}/>
            ):
            <Redirect to='/sign-in-tutor'/>
        )
        }
        
        {...rest}
        render={(props) => (
            localStorage.getItem('role')?(
            <Cmp {...props}/>
            ):
            <Redirect to='/'/>
        )
        }
    
        />
    
)

export default Protected;