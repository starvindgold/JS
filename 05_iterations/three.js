//for of

// strings ["","",""]
// objects [{},{},{}]

const arr = [1, 2, 3, 4, 5];

// for(const num of arr) {
//     console.log(num);
// }

const greeting = "Hello World";
// for(const char of greeting) {
//     console.log(`Each character is: ${char}`);
// }

// Maps
const map =new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN',"India");


// console.log(map);
for(const [key,value] of map){
    console.log(key," :- ",value);
}

const myObj = {
    game1: "NFS",
    game2: "Spiderman",
}

// for(const [key,value] of myObject){
//     console.log(key," :- ",value);
// }
// not working because object is not iterable, we can use Object.entries() to convert object into array of key value pairs