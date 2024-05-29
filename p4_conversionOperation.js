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
