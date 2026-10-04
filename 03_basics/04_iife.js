// Immediately Invoked Function Expressions (IIFE)

// function one() {
//     console.log(`DB CONNECTED`);
// }()
// throws error

(function one() {
    // named iife
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB TWO CONNECTED`);
})()