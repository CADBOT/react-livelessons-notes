var fs = require('fs')

function promiseFs(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}

var p = promiseFs('./pyramid.js')
  .then(data => promiseFs('./script.js'))
  .then(data => console.log(data.toString()))
  .catch(e => console.log(e))
