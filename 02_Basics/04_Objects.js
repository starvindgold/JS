// // Singleton object declaration
// const user = new Object()

// Non singleton
const user = {}

user.id = "123abc"
user.name = "John Doe"
user.isLoggedIn = false

// console.log(user);

const regularUser = {
    email: "abc@xyz.com",
    fullname: {
        firstname: "abc",
        lastname: "def",
    }
}

// console.log(regularUser.fullname);
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) // first object is assigned with copied attributes and then returned
const obj3 = {...obj1,...obj2} // ... is spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 2,
        email: "abc@gmail.com",
    },
    {
        id: 3,
        email: "abc@gmail.com",
    },
    {
        id: 4,
        email: "abc@gmail.com",
    },
]

// console.log(users[1]);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js",
    price: "999",
    instructor: "abc"
}

// const {instructor} = course // extracts property with same name
// console.log(instructor);

const {instructor: inst} = course // extracts with new name
console.log(inst);

const navbar = ({company}) => {

}

navbar( company = "hitesh")