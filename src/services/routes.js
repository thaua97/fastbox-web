import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { isAuthenticated } from './auth'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
        )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
        </Switch>
    </BrowserRouter>
)

export default Routes