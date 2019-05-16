import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
)

export default Routes