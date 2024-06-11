
const user = {
    username: "nish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function functOne(){
//     let username = "nish"
//     console.log(this.username);
// }

// functOne()

// const funtOne = function () {
//     let username = "nish"
//     console.log(this.username);
// }

const functOne =  () => {
    let username = "nish"
    console.log(this);
}


// functOne()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "nish"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
