// singleton -> contains a single object
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "Arvind",
    [mySym]:"myKey1",
    age: 24,
    "location": "Raipur",
    email: "arvind@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"],
}

// console.log(jsUser["location"]);
// console.log(jsUser[mySym]);

jsUser.email = "arvind1234@gmail.com"

// console.log(jsUser);

// Object.freeze(jsUser)
jsUser.email = "arvind12346789@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
