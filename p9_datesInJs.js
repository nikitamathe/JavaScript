let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); // Type of Date is Object
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getSeconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());

let myCreatedDate = new Date(2023, 0, 23) // Months starts from 0 in Js
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toDateString());  // output didn't gave time / didn't show result as we want because of wrong method called

myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());  // Here you have to use toLocalstring() method to display given time

// Date in format of YYYY-MM-DD
myCreatedDate = new Date("2023-00-14"); 
console.log(myCreatedDate); // In DD-MM-YYYY format months starts from 01 so it display invalid date
// As in above case it represent array format so month starts from 0 but not here
myCreatedDate = new Date("2023-01-14"); 
console.log(myCreatedDate); 
console.log(myCreatedDate.toString()); 

// date in format of DD-MM-YYYY
myCreatedDate = new Date("01-01-2024")
console.log(myCreatedDate.toLocaleString());

// timeStamp used for quizzes, polls, winner declaration
let myTimeStamp = Date.now()
console.log(myTimeStamp);
// millisecond values are obscure in respect of knowing date or values
// Comparing dates in hotels to manage date booking
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // as date is object

// convert it into seconds

console.log(Date.now()/1000); // it gives decimal value
console.log(Math.floor(Date.now()/1000)); // we dont want decimal then use of Math.floor

//
let newDate =new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // We added one +1 here as months starts from 0 index in JavaScript
// String interpolation means back tick i.e, ``  `  `
// if we want to also add anything in date we use back tick
`${newDate.getDay()} and the time is ${newDate.getHours()}`
//console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
console.log(`The Day is ${newDate.getDay()} th and the time is ${newDate.getHours()}`)

// we can define object and various parameters, value and Internationalization api's and features
newDate.toLocaleString('default', { // ctrl + space -> gives you many properties to use
weekday:"long", // here we can customise by using long, short etc
//timeZone:
})

// it is same as console.log(myDate.toLocaleDateString()); but here above we can customise the things according to our requirement