/* 
01_base_syntax.js Write a simple console.log() that prints "Hello JavaScript" 
Then try writing a variable with uppercase vs lowercase letters (myName vs myname) and observe the difference.
*/

// Simple console.log() that prints "Hello JavaScript" 
console.log("Hello JavaScript")

//Variables with uppercase vs lowercase letters (myName vs myname)
const myName = "Amber"
const myname = "Princess"

console.log(myName) // Amber
console.log(myname) // Princess

// Both variables work. However, they are treated as two different variables because JavaScript is case-sensitive. 
// That's why when I printed the variables "myName" and "myname", there were two different outputs.
// However, I learnd that the naming conventions for variables is camelCase, so "myName" is the preferred way to name a variable.
// I also learned that variable names cannot start with a number or special character (except for $ and _).