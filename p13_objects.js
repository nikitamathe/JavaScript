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

console.log(appUser.hasOwnProperty('isLoggedIn')); // is there isLoggedIn property available? -> true 

// Destructuring of Objects

const course = {
    coursename: "JavaScript Course",
    price: 999,
    courseInstructor:"Nishita"
}
 course.courseInstructor  //use value by

 // Clean code syntax avoiding repeatitive course.keys
 /* const {courseInstructor} = course  // course is the source from where we have to extract values // within {} is what values we want
 console.log(courseInstructor);  */

const {courseInstructor: instructor} = course  // course is the source from where we have to extract values // within {} is what values we want
 console.log(instructor); // shorten the courseinstructor name 
/* // react example //destructuring
 const navbar = ({company}) => {    // they don't use props.company repeatedly 

 }
 navbar(company = "Nishita1") */


// API  // how to write values coming from backend part
/* {  This is JSON
     }  */
/* {
    "name": "nishita",
    "coursename" : "JavaScript",
   " price" : "Free"

} */
//numbers and true/false in api comes without quotation mark
//using fetch method in javascript we can call any url in response we get data of api
// we get api's in array format(in array we can get many such kind of objects) also not neccessarily in object format {  }
[
    {},    // loops and all
    {},
    {}

]
/* Example
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }     */
  





