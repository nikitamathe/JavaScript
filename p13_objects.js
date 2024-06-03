// Object as constructor  // Singleton
// const appUser = new Object() // Singleton object
const appUser = {} // Non singleton object // empty object

appUser.id = "111abc"
appUser.name = "Jack"
appUser.isLoggedIn = false
console.log(appUser); 

// object with objects
const regularUser = {
    email: "nishita@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nishita",
            lastname: "Singh"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);   // also search for optional chaining

// merge objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is target and others are source // if didn't add it as above everthing will get into obj1 as target  
const obj3 ={...obj1,...obj2}  //spread operator // mostly used over above
console.log(obj3);

// If values came from database //Array of users
const users= [
{
    id: 1,
    email: "n1@gmail.com"
},
{
    id: 2,
    email: "n2@gmail.com"
},
{
    id: 3,
    email: "n3@gmail.com"
},
]
console.log("           ***           ");
users[1].email
console.log("           ***           ");
console.log(appUser);
console.log("           ***           ");
console.log(Object.keys(appUser));
console.log("           ***           ");
console.log(Object.values(appUser));
console.log("           ***           ");
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));


