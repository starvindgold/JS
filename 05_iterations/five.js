const coding = ["JavaScript", "Python", "Ruby", "C++" , "java"];

// // for each loop
// coding.forEach( function (item) {
//     console.log(item);
// }/* callback function - does not have a name */);

// coding.forEach( (item) => {
//     console.log(item);
// });// arrow function

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach((item, index, arr /* for each have access to other parameters as well */) => {
//     console.log(`item is ${item} and index is ${index} and array is ${arr}`);
// });

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})