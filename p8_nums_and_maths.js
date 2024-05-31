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


