import React from 'react'
import './Content.css'
import {Switch, Route} from 'react-router-dom'

import Home from '../views/Home'
import ChartConfig from '../views/application/Chartconfig'

const Content = props => (
    <main className="Content">    
        <Switch>
            <Route path="/Chart">
                <ChartConfig></ChartConfig>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    </main>
)

export default Content