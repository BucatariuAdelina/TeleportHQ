import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Catalog from './views/catalog'
import Contact from './views/contact'
import Servicii from './views/servicii'
import Home from './views/home'
import GettingStarted from './views/getting-started'
import Informatii from './views/informatii'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Catalog} path="/catalog" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Servicii} path="/servicii" />
        <Route exact component={Home} path="/home" />
        <Route exact component={GettingStarted} path="/" />
        <Route exact component={Informatii} path="/informatii" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
