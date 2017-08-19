import React from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants.js'
import {incrementActions} from './actions/app-actions.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    incrementActions.incrementCount()
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
