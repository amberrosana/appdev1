/*
11_arrow_functions.js
Convert the following traditional functions into arrow functions.
Include examples with no parameters, one parameter, and implicit return.

function greet(name) {
  return "Hello, " + name;
}

function square(n) {
  return n * n;
}

function sayHi() {
  console.log("Hi!");
}
*/

// 1st function
const greet = name => "Hello, " + name        // one parameter, implicit return
console.log(greet("Amber"))                   // Hello, Amber

const greet2 = (name) => {                    // one parameter, explicit return
  return "Hello, " + name
}
console.log(greet2("Amber2"))                 // Hello, Amber2

const greet3 = () => "Hello, Stranger"        // no parameters, implicit return
console.log(greet3())                         // Hello, Stranger


// 2nd function
const square = n => n * n                     // one parameter, implicit return
console.log(square(2))                        // 4

const square2 = (n) => {                      // one parameter, explicit return
  return n * n
}
console.log(square2(4))                       // 16

const square3 = () => 3 * 3                   // no parameters, implicit return
console.log(square3())                        // 9

// 3rd function
const sayHi = () => console.log("Hi!")        // no parameters, implicit return
sayHi()                                       // Hi!
