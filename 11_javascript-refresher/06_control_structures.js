/*
06_control_structures.js
Write an if...else if...else that gives grades: >= 90 → A, >= 80 → B, >= 70 → C, otherwise F.
Write a for loop that prints numbers 1 to 5.
Write a while loop that prints "Hello" 3 times.
*/

// Writing an if...else if...else that gives grades: >= 90 → A, >= 80 → B, >= 70 → C, otherwise F.
let grade = 99
if (grade >= 90) {
    console.log("A")
}   
else if (grade >= 80) {
    console.log("B")
}
else if (grade >= 70) {
    console.log("C")
}
else {
    console.log("F")
}

// Writing a for loop that prints numbers 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// Writing a while loop that prints "Hello" 3 times.
let count = 0
while (count<3) {
    console.log("Hello")
    count++
}
