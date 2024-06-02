// Two declaration type of object. Objects declared as literals or constructor
// singleton when made with constructor we get singleton object in other way it gives multiple instances 
// object literal
/* Object.create //constructor method // singleton */
/* const JsUser ={} // empty object */
const JsUser = {
    name:"Nishita" ,  
    "full name" :"Nishita Singh",    // here key and value both can be given by as not like array 
    age: 29,
    location: "Jaipur",
    email: "nishita@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser.email) ;  // not a good practice   // full name is not accessible by this method 
console.log(JsUser["email"]) ; // mail string ki tarah
//console.log(JsUser.full name);
console.log(JsUser["full name"]) ;



