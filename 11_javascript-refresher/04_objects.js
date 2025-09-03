/* 04_objects.js
Create an object aboutMe with name, age, course.
Add a method introduce() that prints: "Hi, my name is ___ and I am ___ years old."
Add a new property hobby after creating the object.
*/

// aboutMe object with name, age, course, and introduce() method
let aboutMe = {
    name: "Amber",
    age: 19,
    course: "BSIS",
    introduce: (function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    })
}

// Adding a new property hobby after creating the object
aboutMe.hobby = "listening to music"

console.log(aboutMe) // Print object to the console