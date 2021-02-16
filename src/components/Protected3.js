import { render } from '@testing-library/react';
import React from 'react';
import { Redirect,Route } from 'react-router-dom';


const Protected3 = ({component:Cmp,...rest}) => (
    <Route
    {...rest}
        render={(props) => (
            localStorage.getItem('token')?(
            <Cmp {...props}/>
            ):
            <Redirect to='/sign-in-student'/>
        )
        }
    
        />
    
)

export default Protected3;