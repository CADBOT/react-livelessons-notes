var fs = require('fs')

console.log(1)
function promiseFs(file) {
  console.log(3)
  return new Promise((resolve, reject) => {
    console.log(4)
    fs.readFile(file, (err, data) => {
      console.log(6)
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}

console.log(2)
promiseFs('./pyramid.js')
  .then(data => {
    console.log(7)
    //console.log(data.toString())   
  })
  .catch(err => {
    
  })
console.log(5)
