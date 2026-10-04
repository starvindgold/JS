// const coding = ["JavaScript", "Python", "Ruby", "C++" , "java"];

// const values =coding.forEach( (item) => {
//     // console.log(item);
//     return item; // forEach does not return anything
// })

// console.log(values); // undefined - forEach does not return anything

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => {
//     // num > 4
//     return num > 4; // if we do not use return statement then it will return undefined
// });
// console.log(newNums);

// const newNums =[];

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// });
// console.log(newNums);


const Books = [
    { title: "Book 1", author: "Author 1" , genre: "Fiction", published: 2010, edition: "2011" },
    { title: "Book 2", author: "Author 2" , genre: "Non-Fiction", published: 2015, edition: "2016" },
    { title: "Book 3", author: "Author 3" , genre: "Horror", published: 2020, edition: "2021" },
    { title: "Book 4", author: "Author 4" , genre: "History", published: 2008, edition: "2019" },
    { title: "Book 5", author: "Author 5" , genre: "Science", published: 2012, edition: "2013" },
    { title: "Book 6", author: "Author 6" , genre: "Fiction", published: 2011, edition: "2012" },
    { title: "Book 7", author: "Author 7" , genre: "Non-Fiction", published: 2014, edition: "2015" },
    { title: "Book 8", author: "Author 8" , genre: "Horror", published: 2019, edition: "2020" },
    { title: "Book 9", author: "Author 9" , genre: "History", published: 2017, edition: "2018" },
]

let userBooks = Books.filter((book) => {
    return book.genre === "History";
});


userBooks= Books.filter((book) => { 
    return book.published > 2015; 
});

userBooks= Books.filter((book) => {
    return book.published >= 2015 && book.genre === "History"; 
});

console.log(userBooks);

