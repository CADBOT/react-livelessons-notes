var numbers = [1, 2, 3, 4]

var numbers2 = numbers.map(function(number) {
  return number * 2
})

// form 1
numbers.map((number) => {
  return number * 2
})

// form 2. Only one parameter
numbers.map(number => {
  return number * 2
})

// form 2 (continued) We must still use 
// parens for 0 params
numbers.map(() => {
})

var results = numbers.map(number => number * 2)
console.log(results)
