import React from 'react'
export default class Profile extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name !== this.props.name
  }
  render() {
    console.log('profile rendered')
    let hobbies = this.props.hobbies.map((hobby, index) => {
      return <li key={index}>{hobby}</li>
    })
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>
          {this.props.name} is {this.props.age} and {this.props.bio}
        </p>
        <h3>Hobbies</h3>
        <ul>
          {hobbies}
        </ul>
      </div>
    )
  }
}
