import React, { Component } from 'react'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: <One />,
    }
  }
  renderPageOne = e => {
    console.log(e.target.value)
    switch (Number(e.target.value)) {
      case 1:
        this.setState({
          page: <One />,
        })
        break
      case 2:
        this.setState({
          page: <Two />,
        })
        break
      case 3:
        this.setState({
          page: <Three />,
        })
        break
      case 4:
        this.setState({
          page: <Four />,
        })
        break
      case 5:
        this.setState({
          page: <Five />,
        })
        break
      default:
        this.setState({
          page: <One />,
        })
    }
  }

  render() {
    return (
      <div className="Home">
        <h2>Directory Of Apps</h2>
        <div id="content">{this.state.page}</div>
        <input
          type="submit"
          value="1"
          onClick={this.renderPageOne}
          className="btn"
        />

        <input
          type="submit"
          value="2"
          onClick={this.renderPageOne}
          className="btn"
        />
        <input
          type="submit"
          value="3"
          onClick={this.renderPageOne}
          className="btn"
        />
        <input
          type="submit"
          value="4"
          onClick={this.renderPageOne}
          className="btn"
        />
        <input
          type="submit"
          value="5"
          onClick={this.renderPageOne}
          className="btn"
        />
      </div>
    )
  }
}
