/*
13_spread_rest.js
Use the spread operator to clone and extend an array and object.
Use the rest operator to create a function that accepts any number of arguments.

const numbers = [1, 2, 3];
const user = { name: "Elmer", age: 30 }; // replace it with your name and age

function sum(a, b) {
  return a + b;
}
*/

const numbers = [1, 2, 3]
const moreNumbers = [...numbers, 4, 5, 6, 7]
console.log(moreNumbers) // [1, 2, 3, 4, 5, 6, 7]

const user = { name: "Amber", age: 19 }
const extendedUser = { 
    ...user, 
    sex: "Female", 
    nationality: "Filipino" 
}
console.log(extendedUser) // { name: 'Amber', age: 19, sex: 'female', nationality: 'Filipino' }

function sum(...args) {
  return args.reduce((acc, num) => acc + num, 0)
}

console.log(sum(12, 2, 5, 11)) // 30
