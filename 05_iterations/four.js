const myObject = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    cpp: "C++",
}

// for in loop
// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const programming = ["JavaScript","Python","Ruby","C++"];

for(const key in programming){// key is index of array
    console.log(programming[key]);
}

// const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN',"India");

// for(const key in map){
//     console.log(key); // map is not iterable using for in loop
// }

