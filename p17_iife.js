// Immediately Invoked Function Expressions (IIFE)


(function functOne(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('nish')