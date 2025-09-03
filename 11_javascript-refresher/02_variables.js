/*
02_variables.js
Create variables for your name (string), age (number), and isStudent (boolean).
Print their values and check their typeof.
Do some arithmetic with two numbers (add, subtract, multiply, divide).
Compare "5" == 5 and "5" === 5. Observe the difference.
*/

// Create variables
const myName = "Amber Rosana"
let age = 19
let isStudent = true

// Print values
console.log(myName)
console.log(age)
console.log(isStudent)  

// Check data types
console.log(typeof myName)     
console.log(typeof age)
console.log(typeof isStudent)

// Arithmetic operations
console.log(10+5)      // Addition
console.log(10-5)      // Subtraction
console.log(10*5)      // Multiplication    
console.log(10/5)      // Division

// Comparison == vs ===
console.log("5" == 5)      // true (it checks only the data value)
console.log("5" === 5)     // false (it checks both data value and data type)
