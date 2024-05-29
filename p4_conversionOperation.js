let score = 33
//const {score} = req.body
console.log(typeof score);
console.log(typeof (score));

score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

score = "33abc"

valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN -> not a number     

score = null

console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = undefined

console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = true

console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = false 

console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = "Nishita"

console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // string which is not converted into number. It gives NaN.

// "33" -> 33 easily converted into number
// "33abc" -> NaN
// True -> 1; False -> 0

let isLoggedIn = ""  // check isLoggedIn as 1 , 0 , "Nishita"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true; 0 -> False
// " -> false
// "Nishita" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************************** Operations **********************************

let value = 3
let negvalue = -value 
console.log(negvalue); // Negative value

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 raised to the power 2
console.log(2/3); // Divide
console.log(2%3); // Remainder

let str1 = "Hello"
let str2 = " Nishita"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log(3 + 4 * 5 % 3); // improper way to solve multiple operations
console.log((3 + 4) * 5 % 3); // use of proper parenthesis

console.log(true);
console.log(+true); // tricky conversion. Not a good practice
//console.log(true+);
console.log(+""); // tricky conversion. Not a good practice

let num1, num2, num3 
num1 = num2 =num3 = 2+2
// Prefix and Postfix 
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

gameCounter = 100
gameCounter++;
console.log(gameCounter); 










