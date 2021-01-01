import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/'
import SignUpPage from './pages/signup/index'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signup' component={SignUpPage} exact/>
      </Switch>
      
    </Router>
  )
}

export default App
