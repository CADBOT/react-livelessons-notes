var fs = require('fs')

fs.readFile('./script.js', function(err, data) {
  console.log('script.js contents')
  fs.readFile('./pyramid.js', function(err, data) {
    console.log('pyramid.js contents')
    fs.readFile('./yetanotherscript.js', function(err, data) {
      console.log('script.js contents')
    })
  })
})
