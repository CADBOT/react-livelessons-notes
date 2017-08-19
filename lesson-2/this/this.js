'use strict'
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function() {
  console.log('Hello my name is ' + this.name)
}

var p1 = new Person('Adrienne', 24)
var p2 = new Person('Tim', 14)

var name = p1.name
var sayName = p1.sayName

sayName()
