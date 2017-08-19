import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [
        {
          name: 'Sue', 
          age: 30,
          bio: 'enjoys swimming and biking',
          hobbies: ['swimming', 'biking']
        },
        {
          name: 'Bill',
          age: 40,
          bio: 'enjoys long walks on the beach',
          hobbies: ['gardening', 'games']
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
  }

  addUser(e) {
    console.log(this)
    var user = {
      name: 'Tom',
      age: 22,
      bio: 'enjoys sports',
      hobbies: ['basketball', 'baseball']
    }
    this.setState({
      profiles: this.state.profiles.concat([user])
    })
  }

  render() {
    let profiles = this.state.profiles.map(profile => {
        return ( 
          <Profile 
            name={profile.name}
            age={profile.name}
            bio={profile.bio}
            hobbies={profile.hobbies} />
        )
    })
    return (
      <div>
        {profiles}
        <AddProfile addUser={this.addUser} />
      </div>
    )
  }
}
