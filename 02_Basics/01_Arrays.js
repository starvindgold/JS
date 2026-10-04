// array

const myArr = [0,1,2,3,4,5] // arrays are resizable in js
const myHeros = ["Iron-man","Hulk"]
const myArr2 = new Array(1,2,3,4)

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)  // inserts in start of array, needs to shift all elements
// console.log(myArr);
// myArr.shift()     // inserts in end of array
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, splice
console.log("A ", myArr);

const myN1 = myArr.slice(1,3);

console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log("C", myArr);
