//let var const
// let a =10
// const b = 20
// var c = 30
 var c = 300
 let a = 10
 const b =20

// console.log(a);
// console.log(b);
// console.log(c);

// {}      // Scope  //with function, with if..else

if(true){
    let a =10
    const b = 20
    var c = 30
    c = 30
    console.log("INNER:",a)
}


// for(let i = 0; i< Array.length;i++){
//     const element = array[i];

// }



console.log(a);
//console.log(b);
console.log(c);   

console.log("              ****               ")

function one(){
    const username ="nishita"

    function two(){                                    // function nested with function
        const website ="Google"
        console.log(username);
    }
    //console.log(website); // Error -> websites scope ends within its curly scope that is in function two itself
    //two()
}
one()
// In nested function, child function can access parent variable
// call stack/diff scope for no of times function is called //closure

//if....else
//closure
if(true){
    const username = "nish"
    if(username === "nish"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);  // no username scope


console.log("              *** Interesting ***              ")

console.log(addone(5)) 
function addone(value){
    return value + 1
}
//addone(5)    // it is not printed so below what we do as one of the way


//console.log(addTwo(5));        // it is not accessible just like line 66 despite writting it before function as this function is declared as well as holded by a variable
//this concept is called Hoisting -> how function is declared,stored what is its execution context how variable is treated how it makes final tree where variables are stored
const addTwo = function(value){    // addTwo variable is a expression  //variable are powerful in js it can hold anything json,values..
    return value + 2
}
//addTwo(5)
console.log(addTwo(5)); 