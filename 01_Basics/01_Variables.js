const account_id = 12345
let account_email = "abcd@gmail.com"
var account_password = "Abcd1234" /* Prefer not to use var because issue of block scope and functional scope */
account_city = "Raipur" // account_city is a global variable because it is not declared with var, let or const
let account_state

// account_id=2 //not allowed to update constant variable
account_email = "bsvabsj@gmail.com"
account_password = "hbasbi"
account_city = "Bengaluru"
console.log(account_id)
console.table([account_email,account_password,account_city,account_state])