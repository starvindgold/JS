const userEmail = []

// if (userEmail) { // although we do not compare the variable
                 // it is still considered as true if it has a value
                 // this is because of truthy and falsy value
    // console.log("Got User Email");
// } else {
    // console.log("Don't have user Email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, "0", 'false', " ", [], {}, function() {},

// if (userEmail.length === 0) {
//     console.log(`Array is Empty`);
// }

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log(`Object is empty`);
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 10 ?? 20
val1 = null ?? null ?? 20

// "??" returns 1st value if it is not null
// else 2nd/(either first not null or last for multiple "??") value is returned

// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
