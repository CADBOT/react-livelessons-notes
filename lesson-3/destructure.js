var numbers = [5, 10]
var [number1, number2] = numbers
console.log(number1)
[number2, number1] = [number1, number2]
console.log(number1)
