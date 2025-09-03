/*
08_essential_features.js
Create an array of 3 hobbies and use .map() to print them.
Use destructuring to extract values from an object student = { name, age }.
Use the spread operator to copy an array [1, 2, 3] into a new array and add 4, 5.
*/

// Array of 3 hobbies and using .map() to print them
const hobbies = ["listening to music", "playing guitar", "biking"]
hobbies.map(hobby => console.log(hobby))

// Destructuring to extract values from the object, "student"
const student = {
    name: "Amber Rosana",
    age: 19
}
const { name, age } = student

// Using the spread operator to copy an array [1, 2, 3] into a new array and add 4, 5
const nums = [1, 2, 3]
const updatedNums = [...nums, 4, 5] 

console.log(updatedNums) // [ 1, 2, 3, 4, 5 ]