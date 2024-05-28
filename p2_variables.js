const accountId = 111111
let accountEmail = "nish@gmail.com"
var accountPassword = "12345"
accountCity = "Nashik"
let accountState;
// accountId = 2 // Can't change constant values
accountEmail = "nm@gmail.com"
accountPassword = "222222"
accountCity = "Pune"
console.log(accountId);
/* 
Prefer not to use var; because of the issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])