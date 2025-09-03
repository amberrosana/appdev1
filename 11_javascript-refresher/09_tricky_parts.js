/*
09_tricky_parts.js
Test the difference between == and ===.
Write an example where a variable is undefined vs null.
Show how this behaves differently in a regular function vs an arrow function inside an object.
Create two arrays, copy one into another using =, then try modifying one. What happens? Try again using the spread operator [...arr].
*/

// Testing the difference between == and ===
const integerNum = 5
const stringNum = "5"

console.log(integerNum == stringNum)  // Although the two values have different data types, it returns true since == only compares values and ignores data type
console.log(integerNum === stringNum) // This returns false since === is strict and compares both value and data type





// Example where a variable is undefined vs null
// For example, in e-commerce websites, there might be prompts that asks users if they want to receive email notifications about sales and promotions.
let emailNotifications

// If the user chooses not to respond to the prompt, the variable "emailNotifications" will be undefined since it has been declared but not assigned a value.
console.log(emailNotifications) // undefined

emailNotifications = null // This represents that the user has explicitly opted out of email notifications.

// This function checks the value of "emailNotifications" and it changes how the application behaves based on the user's response.
function checkEmailNotifications() {
    if (emailNotifications === undefined) {
        console.log("User has not responded to the email notifications prompt.") // The app will keep prompting the user to choose whether they want to receive email notifications.
    } else if (emailNotifications === null) {
        console.log("User has opted out of email notifications.") // The app will stop prompting the user and will not send any email notifications.
    } else if (emailNotifications === true) {
        console.log("User has opted in to email notifications.") // The app will send email notifications to the user and stop prompting them.
    }
}
// The null value is intentionally assigned to indicate that the user or the system has made a choice to leave it empty.
// Undefined on the other hand, indicates that the user or the system has not yet assigned a value to the variable.
// This example shows how undefined and null can be used to control the flow and behavior of an application.





// Show how this behaves differently in a regular function vs an arrow function inside an object.
const person = {
    name: "Amber",
    greetRegularFunction: function() {
        console.log(`Hi! My name is ${this.name}!`) // In a regular function, "this" refers to the object that called the method, which is the object "person".
    },
    greetArrowFunction: () => `Hi! My name is ${this.name}!` // In an arrow function, it ignores the object. "this" does not refer to the object "person" but to the surrounding context, which is the global scope.
}

person.greetRegularFunction() // Hi! My name is Amber!
person.greetArrowFunction() // Hi! My name is undefined!
// The regular function works as "this" refers to the object "person". "this.name" means "person.name", which is "Amber".
// The arrow function does not work as "this" refers to the global scope. In the global scope, there is no variable "name", so "this.name" is undefined.
// This shows that regular functions are better suited for object methods when you want to access properties of the object using "this".
// Arrow functions are better suited for non-method functions or when you want to inherit "this" from the surrounding scope.



// Create two arrays, copy one into another using =, then try modifying one. What happens? 
const array1 = ["a", "b", "c"]
const array2 = array1
array2.push("d")
console.log(array1) // [ 'a', 'b', 'c', 'd' ]
console.log(array2) // [ 'a', 'b', 'c', 'd' ]

// I only modified array 2, but array 1 was also modified. Using = to copy an array doesn't create a new array, it only references the original array.

// Try again using the spread operator [...arr].

const original = [2100, 2200, 2300]
const copy = [...original] // The proper way to copy an array is by using the spread operator.
copy.unshift(4000)
console.log(original) // [ 2100, 2200, 2300 ]
console.log(copy)  // [ 4000, 2100, 2200, 2300 ]

// Only the copy array was modified. The original array remains unchanged.
//Using the spread operator creates a new array with the same elements as the original array, so modifying the new array does not affect the original array.