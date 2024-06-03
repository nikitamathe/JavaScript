// Two declaration type of object. Objects declared as literals or constructor
// singleton when made with constructor we get singleton object in other way it gives multiple instances 
// object literal
/* Object.create //constructor method // singleton */
/* const JsUser ={} // empty object */

const mySym = Symbol("key1")
const JsUser = {
    name:"Nishita" ,  
    "full name" :"Nishita Singh",    // here key and value both can be given by as not like array 
   // mySym : "mykey1",
   [mySym] : "mykey1", // we used [] for mySym because we want symbol as data type in line 24
    age: 29,
    location: "Jaipur",
    email: "nishita@gmail.com",  // whatever key we declare it is by default considered as "key" (string) thats why  line 20 contains ["email"]
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
  console.log(JsUser.email) ;  // not a good practice   // full name is not accessible by this method 
    console.log(JsUser["email"]) ; // mail string ki tarah
    //console.log(JsUser.full name);
    console.log(JsUser["full name"]) ;
    console.log(JsUser.mySym) ; 
    console.log(typeof JsUser.mySym) ; //It should be Symbol type 
    console.log(JsUser[mySym]);      

// object value access by dot notation 
JsUser.email = "nishita2@gmail.com" // value change in object 
console.log(JsUser.email) ; 
//Object.freeze(JsUser) // If we want to lock values so that no changes will be made by anyone 
JsUser.email = "nishita3@gmail.com" 
console.log(JsUser.email) ; 

// Function add
JsUser.greeting = function(){
    console.log("Hello! JS user");
}
console.log(JsUser.greeting);    //undefined
console.log(JsUser.greeting()); //greeting is not a function because we freezed JsUser above








