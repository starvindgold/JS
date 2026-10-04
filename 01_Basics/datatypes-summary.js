// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol
// console.log(id===anotherid);

const bigNum = 136542465156453465456n


// Reference type (Non-Primitive )
// array, objects, functions

const heros = ["Iron-man","Hulk","Spider-man"]
let person = {
    name: "Arvind",
    age: 24,
}

const myFunction = function (){
    console.log("Hello World");
}

// console.log(typeof person)

// ***************** Memories ******************

// Stack (Primitive), Heap (Non-Premitive)

let myName = "Arvind"
let newName = myName
newName="sbdvk" 
//newName only gets a copy of myName so no changes in this (Stack variables only gives a copy of their data and not its reference)

// console.log(myName);
// console.log(newName);

let user1 = {
    email: "user@askbs.com",
    upi: "user@hdfc",
}

let user2 = user1
user2.email = "user2@savbds.com"
// user1 is a heap variable so it gives reference of its data and not copy 
// so all changes made in user2 will be visible in user1
console.log(user1);
console.log(user2);
