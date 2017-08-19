import React from 'react'
import ReactDOM from 'react-dom'

var name = 'tim'

var App = React.createClass({
  getInitialState: function() {
    return {
      profiles: [
        {name: 'David'},
        {name: 'Sarah'} 
      ]
    }
  },

  render: function() {
    var profile1 = this.state.profiles[0]
    var profile2 = this.state.profiles[1]
    return (
      <section>
        <section>
          <h3>Profile 1</h3>
          <p>Name {profile1.name}</p>
        </section>
        <section>
          <h3>Profile 2</h3>
          <p>Name {profile2.name}</p>
        </section>
      </section>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
