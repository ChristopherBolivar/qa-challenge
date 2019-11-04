import React, { Component } from 'react'
import api from '../../api'

export default class One extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: [],
    }
  }
  // componentWillReceiveProps() {
  //   if (this.props.limit >= 1) {
  //     api
  //       .getApps({ start: this.props.start, end: this.props.limit })
  //       .then(app => {
  //         this.setState({
  //           app: app,
  //         })
  //       })
  //       .catch(err => console.log(err))
  //   }

  // }
  componentDidMount() {
    let int = setInterval(() => this.getUserState(), 100)
    this.setState({ int })
  }

  getUserState = () => {
    console.log('in here', this.state)
    api
      .getApps({ start: this.props.start, end: this.props.limit })
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
          <div key={app.name} className="col-4">
            <p>{app.name}</p>
          </div>
        )
      })
    } else {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">{this.displayApps()}</div>
        </div>
      </div>
    )
  }
}
