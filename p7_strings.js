let name = "Nish "
const repoCount = 50

//console.log(name + repoCount + " Value") // Out dated syntax

console.log(`Hello my name ${name} and my repo count is ${repoCount} `);

//another way of declaring string
const gameName = new String('Nishita')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // 2 is the index no.
console.log(gameName.indexOf('t'));

name = "Nish-ita"
const newString = gameName.substring(0, 4) // substring dont obey negative indexing
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "            Nishita            "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes white space

const url = "https://nish.com/nish%20community"

console.log(url.replace('%20', '-'))
console.log(url.includes('nish'))

