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

console.log(a);
//console.log(b);
console.log(c);   
