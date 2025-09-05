/*
12_destructuring.js
Use destructuring to extract values from an object and an array.
Also apply destructuring in function parameters.

const person = {
  name: "Elmer", // replace it with your name
  age: 30 // replace it with your age
};

const hobbies = ["reading", "coding"]; // replace it with your hobbies

function printName(person) {
  console.log(person.name);
}
*/

const person = {
  name: "Amber", 
  age: 19 
}

const { name, age } = person
console.log(name) // Amber
console.log(age) // 19
console.log(person) // { name: 'Amber', age: 19 }

const hobbies = ["listening to music", "writing"]
const [hobby1, hobby2] = hobbies
console.log(hobby1) // listening to music
console.log(hobby2) // writing
console.log(hobbies) // [ 'listening to music', 'writing' ]

function printName(person) {
  console.log(person.name)
}  

printName(person) // Amber
printName({ name: "Meowmeow", age: 3 }) // Meowmeow
