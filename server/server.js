var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var profiles = [
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
    
app.get('/profiles', (req, res) => {
  console.log('hit')
  res.json(profiles)
})

app.listen(3000, () => console.log('listening'))
