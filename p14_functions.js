// functions in simple words are(encompassed in)the package of x lines of code
 console.log("N");  //repeatitive call will be needed if we want this same for many times;we can avoid this using function call
console.log("I");
console.log("S");
console.log("H");

function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
sayMyName() // sayMyName is Reference of function and () infront of sayMyName is its exection
// Adding two numbers
function addTwoNumbers(number1,number2){  //not necessary to give datatypes in js but it will give problem if any arguments is not given
    //number1,number2 here is parameter when we make functions definition 
    console.log(number1 + number2)

}
addTwoNumbers()
addTwoNumbers(3,4) // this 3, 4 are arguments passed when we call function
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,5) //we can also save this in variable
console.log("Result value:",result);
console.log(result);        // it does not return the value   

function addTwoNums(num1,num2){ 
    let resultnum = num1+num2        // this result we have saved in addTwoNums
    console.log("nish");  //this code is reachable
    return num1 + num2 // can be directly accessed
    return resultnum
    
    console.log(resultnum);  //this code is always unreachable code after return is always unreachable
    return num1 + num2
}
const resultnum = addTwoNums(3,5)
console.log("Result:", resultnum);

function loginUserMessage(username){
    //function loginUserMessage(username = "sam"){         // when you want a default value to avoid undefined or below thing you can assign username as "sam"
    // if(username === undefined){    // this will run when situation will evaluate in true
    if(!username){                            // ! not symbol // empty string is false
        console.log("Please enter a username");
        return  // we write return here as we don't want to print below line undefined just logged in  to satisfy above imperative sentence and we know after return code is unreachable
    }
 return`${username} just looged in`
}
//console.log(loginUserMessage("Nishita"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage())
//console.log(loginUserMessage("NISHITA")) //and if you passed any value then it will overwrite sam which was default value

// when you don't know the number of arguements will come so in that way to prepare our parameters

//function calculateCartPrice(num1){

    //how rest operator is passed in function

    // function calculateCartPrice(...num1){      //... is rest operator    // spread and rest operator are same syntactically ... but usecase depends on where it is being used 
    function calculateCartPrice(val1,val2,...num1){  //200 goes to val1, 400 goes to val2 
    return num1
}
//console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,400,500,1000)) // for such kind, we use rest operator 


const user = {
    username :"Nish",                 // OBJECT
    price: 199
}

function handleObject(anyobject){  
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)                           // FUNCTION
}

handleObject(user)                     // FUNCTION CALL
handleObject({
    username: "sam",
    price: 399
}) 

// array

const myNewArray   = [200,400,100,600] 

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]))