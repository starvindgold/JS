function callMyName() {
    console.log("Arvind");
}

// callMyName() // function call

// function add(number1,number2) {
//     console.log(number1 + number2);
// }

function add(number1,number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = add(1,2);
// console.log("result:",result);

function loginUserMessage (username = "sam") {
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("arvind"));
// console.log(loginUserMessage());

function calculatePrice(val1,val2,...num1) {
    return num1
}

// console.log(calculatePrice(100,200,300,400,500));

const user = {
    username: "arvind",
    price: 200,
}

function handleObject (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 300,
})

const myNewArray = [200,400,100,600]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray));