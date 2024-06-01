// Array Declaration

const myArr =[0, 1, 2, 3, 4, 5]  // we write array in squared bracket
// 0,1,2,3,4,5 are elements  // This elelments can be strings, number type or mixed
console.log(myArr[0]);

let numbers = [10, 20, 30];
console.log(numbers[0]); // Access element at index 0
console.log(numbers["one"]); // we dont write like this

// Associative array-like object (using an object)
let person = { name: "John", age: 30 };
console.log(person["name"]); // Access property with named key "name"

// JavaScript array-copy operations create shallow copies.
// Shallow copy -> A shallow copy of an object is a copy whose properties share the same references point just like Heap
// Deep copy -> A deep copy of an object is a copy whose properties do not share the same references point just like Stack

const myAnimals = ["Dog","Cat","Cow"]
const myArr2 =new Array(1,2,3,4) // it adds automatic sq brackets
console.log(myArr[1]);

// Array methods

myArr.push(6) // Adds values
myArr.push(7)
myArr.pop()   // removes last element of array
console.log(myArr);
/*
myArr.unshift(0)
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
*/
myArr.shift()  // just like pop, we dont give any parameter
console.log(myArr);

myArr.unshift(0)  // Adds 0 to the top of array at the begining
console.log(myArr);


console.log(myArr.includes(9)) ; // quetionnaire methods gives true or false result accordingly
console.log(myArr.indexOf(9)) ;
console.log(myArr.indexOf(19)) ;
console.log(myArr.indexOf(3)) ;

const newArr =myArr.join() // join() adds all elements of array into string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)     // Difference between splice and slice is slice doesnot include last range but splice includes   but major difference is splice manipulates original array 
console.log(myn1);
console.log("B", myArr);     

const myn2 = myArr.splice(1,3)
console.log("C", myArr);        // Splice manipulates original array
console.log(myn2);   






