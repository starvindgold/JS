// !!NOTE!! Global scope is different for browser ispect and code env

// let a = 10
// const b = 20
// var c = 300 // even if we decleared another c in different scope, the var decleared later is refrenced

let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30    
    // console.log("Inner: ",a);
}

// console.log("Outer: ",a);

// console.log(a); // follows block scope
// console.log(b); // follows block scope
// console.log(c); // doesnot follow block scope, accessible everywhere

function one(){
    const username = "arvind"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}

// one()

if (true) {
    const username ="arvind"
    if (username==="arvind") {
        const website = "youtube"
        // console.log(username+" "+website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++ interesting +++++++++++++++


addone(5)

function addone(num) { // this kind of function can be called even before declaration in code
    return num + 1
}

addone(5)

// addtwo(5) 

const addTwo = function(num) { // this kind of function (also called as an expressions) can not be called before declaration
    return num + 2
}

addTwo(5)