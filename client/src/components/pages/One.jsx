import React, { Component } from 'react'
import api from '../../api'

export default class One extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: [],
    }
  }
  componentDidMount() {
    api
      .getApps({ start: 0, end: 20 })
      .then(app => {
        this.setState({
          app: app,
        })
      })
      .catch(err => console.log(err))
  }
  displayApps = () => {
    if (this.state.app.length >= 1) {
      return this.state.app.map(app => {
        return (
          <div className="col-4">
            <p>{app.name}</p>
          </div>
        )
      })
    } else {
      return <p>sorry</p>
    }
  }
  render() {
    console.log(this.state.app, 'page 1')
    return (
      <div>
        <div className="container">
          <div className="row">{this.displayApps()}</div>
        </div>
      </div>
    )
  }
}
