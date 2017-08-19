var dog = {
  name: 'shorty',
  age: 4
}

var {name: dogName, age: dogAge} = dog
console.log(dogName)
console.log(dogAge)

var {name, age} = dog
console.log(name)
console.log(age)
