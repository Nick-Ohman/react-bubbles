import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import BubblePage from './BubblePage'


  const PrivateRoute = ({component: Component, ...rest}) => {

    if(localStorage.getItem('token')){
        return <Route component={BubblePage} />
    } else {
        return <Redirect to="/login" />
    }
}

export default PrivateRoute