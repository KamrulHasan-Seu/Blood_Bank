import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const  PrivateRoute = ({component: Component, isLogin, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin === true ? <Component {...props} /> : <Redirect to='/login' />
        )} />
    )    
}