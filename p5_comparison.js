console.log(2>1);
console.log(2>= 1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1) // Sometimes comparison of elements having two different data types gives unpredictable results.
console.log("02">1) // Make sure while doing comparisons both has same data types.
// Typescript doesn't allow comparison of two different data type elements.

console.log(null > 0);
console.log(null == 0); // Coercion
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0); // comparsion and equality are two different things. They have two different syntax

// === -> strict check(it not only checks its value but it also checks for its data type; it checks strictly)

console.log("2" === 2);