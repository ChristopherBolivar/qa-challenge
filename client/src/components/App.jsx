import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import logo from '../logo.svg'

import api from '../api'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apps: [],
      splitApps: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  componentDidMount() {
    api
      .getApps()
      .then(apps => {
        console.log(apps.length / 20)
        this.setState({
          apps: apps,
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            component={props => <Home {...props} apps={this.state.apps} />}
          />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}
