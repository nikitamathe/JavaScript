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
console.log(regularUser.fullname.userfullname.firstname);
