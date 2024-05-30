// Primitive (Call by value -> while copying it doesn't give its refrence of memory but it gives by copying it and any changes made is done on copy only)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt (scientific values or any big values that cann't be handle goes into this as simple numerical numbers handle by Number)
// JavaScript is dynamically type language or statically type language ?
const score = 100;
//const score = false; // we dont specify any data types to javascript. We don't define language in JavaScript.
const scorevalue = 100.3; // Number
const isLoggedIn = false; // Boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 1234567890123456789009876543n // represent n at last


// Non primitive or Reference Type (memory's reference can be allocated directly)

// Arrays, Objects, Functions 
const animals = ["Dog", "Cat", "Cow", "Ox"]
let myObj = {           // The Values name and age is stored in variable myObj
    name: "Nishita",    // anything under curly braces is object
    age: 22,
}
//console.log(name);


const myFunction = function(){
    console.log("Hello Nishita");
}

console.log(typeof bigInt);
console.log(typeof outsideTemp);
console.log(typeof scorevalue); // Type of val and their results
console.log(typeof myFunction);
console.log(typeof animals);  // returned type of any non primitive is object and return of function is object function.


// ******************************************** Memory and Threads ********************************************

// Stack (Primitive) -> we get copy of variable declared, Heap Memory (Non-Primitive) -> we get reference of original value, any change made goes to original value

let myName = "Nishita"

/* let anotherName = myName
console.log(anotherName); */

let anotherName = myName
anotherName = "Nish"
console.log(anotherName);

let userOne = {
    email: "userone@gmail.com",
    upiId : "user@ybl"
}

let userTwo = userOne
userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

