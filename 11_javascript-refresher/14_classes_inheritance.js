/*
14_classes_inheritance.js
Convert the following constructor function into a class.
Then create a subclass that extends it and adds a new method.
Subclass = Student
Method = study() which prints NAME is studying // replace NAME with Person name

    function Person(name) {
    this.name = name;
    }

Person.prototype.sayHello = function () {
  console.log("Hi, I am " + this.name);
};
*/

class Person {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    console.log("Hi, I am " + this.name)
  }
}

const me = new Person("Amber")
console.log(me) // { name: "Amber" }
me.sayHello() // Hi, I am Amber

// Subclass
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("Amber Rosana")
student1.sayHello() // Hi, I am Amber Rosana
student1.study() // Amber Rosana is studying
