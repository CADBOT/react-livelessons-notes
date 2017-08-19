function Person(name) {
  this.name = name
}

Person.prototype.sayNameTimed = function() {
  setTimeout(() => {
    console.log(`My name is ${this.name}`)
  }, 1000)
}

var p1 = new Person('Sean')
p1.sayNameTimed()
