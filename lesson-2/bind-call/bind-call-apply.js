'use strict'
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function(x) {
  console.log('My name is ' + this.name)
  console.log(x)
}

var p1 = new Person('Joe', 18)
var p2 = new Person('Sam', 25)

var sayName = p1.sayName

var boundSayName = sayName.bind(p1, 'hello')

boundSayName()
