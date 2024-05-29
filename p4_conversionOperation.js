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





