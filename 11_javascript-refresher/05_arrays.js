/*
05_arrays.js
Create an array of your 3 favorite foods.
Add one more food at the end, then remove the first food.
Use a for...of loop to print each food.
Use .map() to create a new array that says: "I like ___" for each food.
*/

// An array consisting of my 3 favorite foods.
let myFavoriteFoods = ["kimbap", "chicken", "siomai"]

// Adding one more food at the end, then removing the first food.
myFavoriteFoods.push("siopao")
console.log(myFavoriteFoods) // ['kimbap', 'chicken', 'siomai', 'siopao']

myFavoriteFoods.shift()
console.log(myFavoriteFoods) // ['chicken', 'siomai', 'siopao']

// Using a for...of loop to print each food.
for (let food of myFavoriteFoods) {
    console.log(food)
}

// Use .map() to create a new array that says: "I like ___" for each food.

// Storing it in iLikeFood
let iLikeFood = myFavoriteFoods.map(food => `I like ${food}`)
console.log(iLikeFood) // [ 'I like chicken', 'I like siomai', 'I like siopao' ]

// Using only console.log without storing the new array
myFavoriteFoods.map(food => console.log(`I like ${food}`)) 

/* Result:
I like chicken
I like siomai
I like siopao
*/