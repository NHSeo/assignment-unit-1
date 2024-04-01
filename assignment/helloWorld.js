console.log('Hello World!');

// Variables and data types

// String - represent text
let name = 'Noah';
// Variable name                Value
let     x            =            1;

// Number - represent numbers
let total = 199;
total = total + 9;

console.log('total', total);

// Boolean - true or false
let inStock = true;
//inStock = false;

// Conditionals if / else

if(inStock === true) {
    // This code only runs if inStock is true
    total += 5;
    console.log('Adding to total', total);
} else { // else is optional
    // This will run if inStock is not true
    console.log('Out of stock!');
}

let message = '';
if (total > 200) {
    message = 'Max cart value.';
    console.log(message);
} else if (total <= 0) {
    message = 'Your cart is empty!';
    console.log(message);
} else {
    console.log('Total withing 0 - 200');
}

let a = true;
// === Checking if the values are the same
// = Change the value of a variable
if (a === false) {
    console.log('a is ', a);
}

console.log('a is ', a);

let temp = 32;
let isRaining = false;

// && requires both conditions to be true
// || requires one of two conditions to be true
if (temp > 65 && isRaining === false) {
    console.log('Go for work.');
} else {
    console.log('Stay inside.');
}
// ! flips from true to false
isRaining =  !isRaining;

// Multipication
// let finalTotal = (total / 2) * 1.07; 
let finalTotal = (total / 2) * 1.07;
// Division
total = total / 2;
// Subtraction
total = total - 10;

// declare a variable to store a book title
let title = 'The Lord of the Rings';
// check to see if that books contains the word 'The'
if (title === "The") {
    console.log("This book contains 'The' in the name");
} else {
    console.log("I can't find 'The' in the name");
}
// display true or false

let gaming = true;

if (gaming === ture) {
    console.log("I am unable to eat right now.")
} else {
    console.log("Let's go out to dinner together!")
}
