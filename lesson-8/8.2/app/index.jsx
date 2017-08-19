import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App.jsx'

//ReactDOM.render(<App />, document.getElementById('app'));
fetch('http://localhost:3000/profiles')
  .then(res => res.json())
  .then(d => {
    console.log(d)
  })
  .catch(e => {
    console.log(e)
  })
