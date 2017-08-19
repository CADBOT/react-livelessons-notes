function add() {
  console.log(arguments)
  var result = Array.prototype.reduce.call(arguments, function(memo, value) {
    return memo + value
  })
  return result
}

console.log(add(2, 4, 3))

function betterAdd(...values) {
  var result = values.reduce(function(memo, value) {
    return memo + value
  })
  return result
}

console.log(betterAdd(2, 4, 3))
