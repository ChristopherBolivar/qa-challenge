import React, { Component } from 'react'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'
import api from '../../api'

export default class Home extends Component {
  constructor(props) {
    super(props)
    console.log('hello')
    this.state = {
      limit: 0,
      start: 0,
      page: <One limit={20} start={0} />,
      apps: [],
    }
  }

  componentDidMount() {
    api
      .getApps()
      .then(apps => {
        this.setState({
          apps: apps,
        })
      })
      .catch(err => console.log(err))
  }

  displayPaginationNav = () => {
    let numOfPages
    let navItems = []
    console.log(this.state.apps.length)
    if (this.state.apps.length > 50) {
      numOfPages = this.state.apps.length / 20
      for (let i = 1; i <= numOfPages; i++) {
        navItems.push(i)
      }
      return navItems.map(number => {
        return (
          <input
            className="mx-auto text-center"
            key={number}
            type="submit"
            value={number}
            onClick={this.renderPage}
            className="btn"
          />
        )
      })
    }
  }

  renderPage = e => {
    console.log(e.target.parentNode.childElementCount, '=-=--=')
    let limit = this.state.apps.length / e.target.parentNode.childElementCount
    let start = limit * e.target.value - limit
    this.setState({ limit, start })
    console.log(limit, start, '=-=--=')
    this.setState({
      page: <One limit={limit} start={start} />,
    })
  }

  render() {
    return (
      <div className="Home">
        <h2>Directory Of Apps</h2>
        <div id="content">{this.state.page}</div>
        <div className="container mx-auto text-center">
          <div className="row mx-auto text-center">
            {this.displayPaginationNav()}
          </div>
        </div>
      </div>
    )
  }
}
