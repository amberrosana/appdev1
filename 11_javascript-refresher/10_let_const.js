/*
Use let and const to declare variables.
Try reassigning a variable declared with let and one with const.
Observe the difference between them and compare with var.

Update this code and replace the value with your name and age
var name = "Elmer";
var age = 30;
age = 20;
*/


// Using var
var name = "Amber" 
var age = 19
console.log(name) // Amber
console.log(age) // 19

age = 20 // Reassigning a variable with var is allowed
console.log(age) // 20

var name = "Amber Rosana" // Redeclaring a variable with var is allowed
console.log(name) // Amber Rosana



// Using let
let myName = "Amber" 
let myAge = 19
console.log(name) // Amber
console.log(age) // 19

myAge = 20 // Reassigning a variable with let is allowed
console.log(myAge) // 20

// let myName = "Amber Rosana" // Redeclaring a variable with let in the same scope is not allowed
// console.log(myName) // SyntaxError: Identifier 'myName' has already been declared



// Using const
const myNameConst = "Amber" 
const myAgeConst = 19
console.log(myNameConst) // Amber
console.log(myAgeConst) // 19

myAgeConst = 20 // Reassigning a variable with const is not allowed
console.log(myAgeConst) // TypeError: Assignment to constant variable.

// const myNameConst = "Amber Rosana" // Redeclaring a variable with const in the same scope is not allowed
// console.log(myNameConst) // SyntaxError: Identifier 'myNameConst' has already been declared

// Summary
// let allows you to reassign variables but not redeclare them in the same scope.
// const does not allow reassignment or redeclaration of variables.
// var allows both reassignment and redeclaration, which can lead to unexpected behavior.   

// let and const are recommended for use in modern JavaScript to avoid issues related to variable scope and redeclaration
