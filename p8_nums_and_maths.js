const score = 400
// Explicitly defining number data type
const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // output is 100.00 
console.log(balance.toFixed(1)); // output is 100.0

let otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // output gives roundoff value

otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // output gives roundoff value

otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3)); // output gives roundoff value and other as exponential

otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

let hundreds = 1000000
console.log(hundreds.toLocaleString());

hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Indian values/Indian number system


// ******************************* Maths ********************************

console.log(Math);
console.log(Math.abs(-4)); // Absolute value -> Negative value into positive
console.log(Math.round(4.6)); // round off value
console.log(Math.ceil(4.2)) // ceiling value -> slight upward (here 0.2) than the real number (here 4) rounds a number up to the next largest integer (here 5)
console.log(Math.floor(4.2))
console.log(Math.floor(4.9)) // gives lowest value, rounds a number down to the largest integer less than or equal to the given number 
// Here rounds 4.7 down to the nearest integer.
console.log(Math.sqrt(729));
console.log(Math.acos(1));
console.log(Math.cos(1));
console.log(Math.trunc(4.9)) // removing any fractional digits
console.log(Math.trunc(-4.9))
console.log(Math.hypot(3,4)) //Returns the square root of the sum of squares of its arguments (Euclidean norm).
console.log(Math.sign(-9)) // tells us about numbers sign try sign(0) -> 0 ; sign(4) -> +1
console.log(Math.pow(2,3)) // power off / 2 raised to the power of 3
console.log(Math.min(2,4,9,3,6,1,0,-1));
console.log(Math.max(2,4,9,3,6,1,0,-1));

console.log(Math.random()); // Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive) / mostly gives decimal value
console.log(Math.random()*10);
console.log(Math.random()*10 + 1); // To adjust the range of the generated numbers. 1 ensures that the smallest possible number is 1 instead of 0
console.log((Math.random()*10) + 1); // To avoid disobey of BODMAS rule, we added bracket
console.log(Math.floor(Math.random()*10) + 1);// if we want small value use of floor 

const min = 10  
const max = 20  // In this range only
// Trick or Short Formula 
// Math.random() * (max -min + 1)+ min
//console.log(Math.random() * (max -min + 1))
console.log(Math.floor(Math.random() * (max -min + 1))+ min)