import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/project/create/CreateProject'

/** styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/main.scss'


function App() {
  return (
    <div className="app-main">
        <Switch >
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/create-project">
                <CreateProject />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
    </div>
  )
}

export default App
