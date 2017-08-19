var numbers = [1, 2, 10, 15, 100]

var sum = numbers.reduce(function(sum, value) {
  sum += value
}, 0)

console.log(sum)
