import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
)

export default Routes