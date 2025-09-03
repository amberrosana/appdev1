/*
03_functions.js
Write a function greet(name) that returns a greeting.
Write a function square(num) using an arrow function.
Create a function calculator(a, b) that returns the sum and product.
*/

// Greet function that returns a greeting message.
function greet(name) {
    return `Hello sa iyo, ${name}!`
}   

console.log(greet("Amber")) // Hello sa iyo, Amber!

// Square arrow function using an arrow function.
const square = num => num * num
console.log(square(3))


// Calculator function that returns the sum and product.
const sum = (a, b) => a + b
const product = (a, b) => a * b
function calculator(a, b) {
    return `Sum: ${sum(a, b)}, Product: ${product(a, b)}`
}

console.log(calculator(3, 4)) // Sum: 7, Product: 12
