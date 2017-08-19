import React from 'react'

let Profile = props => (
  <div>
    <h3>{props.name}</h3>
    <p>
      {props.name} is {props.age} and {props.bio}
    </p>
    <h3>Hobbies</h3>
    <ul>
      {props.hobbies.map(hobby => <li>{hobby}</li>)}
    </ul>
  </div>
)

export default Profile
