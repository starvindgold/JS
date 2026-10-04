const user = {
    username: "Arvind",
    subscriptionPrice: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "John Doe"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Arvind"
//     console.log(this.username); // returns undefined
// }

// one()

// const two = function () {
//     let username = "Arvind"
//     console.log(this.username);
// }

// two()

// const three = () => {
//     let username = "Arvind"
//     console.log(this);
// }

// three()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2 //implicit return
// implicit return assumes that we are returning expression in the first line

// const addTwo = (num1,num2) => (num1 + num2) 
// if curly brackets("{}") are used, we need to mention return in the function

// const addTwo = (num1,num2) => {username: "Arvind"} // does not return object as outermost bracket is curly

const addTwo = (num1,num2) => ({username: "Arvind"}) // as object is inside regular brackets, it works as implicit return


console.log(addTwo(3,4));