// console.log("2">1);// true because "2" is converted to number 2 and 2>1 is true
// console.log("02">1);// true because "02" is converted to number 2 and 2>1 is true

// console.log(null > 0); // false because null is converted to 0 and 0>0 is false
// console.log(null == 0); // false because null is only equal to undefined and not equal to any other value
// console.log(null >= 0); // true because null is converted to 0 and 0>=0 is true

// ">" treats null as 0, but "==" does not. This is a quirk of JavaScript's type coercion rules. 

// console.log(undefined == 0); // false because undefined is only equal to null and not equal to any other value
// console.log(undefined > 0); // false because undefined is converted to NaN and NaN>0 is false
// console.log(undefined >= 0);   // false because undefined is converted to NaN and NaN>=0 is false

//===

console.log("2"===2);
console.log("2"==2);
console.log("2">2);
console.log("2"<2);