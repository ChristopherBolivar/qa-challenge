import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import logo from '../logo.svg'

import api from '../api'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: [],
      splitApps: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  componentDidMount() {
    api
      .getApps()
      .then(app => {
        console.log(app.length / 20)
        this.setState({
          app: app,
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.app)
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}
