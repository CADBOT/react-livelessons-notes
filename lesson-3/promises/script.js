var fs = require('fs')

fs.readFile('./script.js', function(err, data) {
  console.log(3)
  if (err) {
     // handle the err case
     console.log(err)
     return 
  }
  console.log(data.toString()) 
})


function helper() {
  console.log(2)
  fs.readFile('./script.js', function(err, data) {
    console.log(4)
    if (err) {
       // handle the err case
       console.log(err)
       return 
    }
    console.log(data.toString()) 
  })
}

function main() {
  console.log(1)
  while (true) {

  }
  helper()
}

main()
