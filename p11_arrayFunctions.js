const animals = ["Dog", "Cat", "Cow"]
const birds = ["Sparrow", "Peacock", "Pigeon"]

/* animals.push(birds) // we thought of merged array 

console.log(animals); // here problem is we get array within array
console.log(animals[3][1]);

//animals.concat(birds)
//console.log(animals);  */

const allAnimals = animals.concat(birds)    // concat give new array unlike push
console.log(allAnimals);

// Easy method than Concat spread method/spread operator
const allNewAnimals =[...animals,...birds]
console.log(allNewAnimals);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)  // flat(//we have to give here the depth number i.e, how many subarrays to concat as here we have 2 )
//Infinity handles all subarrays within it 
console.log(realAnotherArray);


//used while data scrapping. selected data comes in different format; we want array
console.log(Array.isArray("Nishita")); // isArray
console.log(Array.from("Nishita"));   // from array
console.log(Array.from({name:"nishita"})); // gives empty output as it is unable to convert it directly //keys-value array

//Multiple variables into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


