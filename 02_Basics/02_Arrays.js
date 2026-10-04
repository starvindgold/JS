const marvel = ["Thor","Ironman","Spider-Man"]
const dc = ["Batman","Superman","Flash"]

// marvel.push(dc) //[ 'Thor', 'Ironman', 'Spider-Man', [ 'Batman', 'Superman', 'Flash' ] ]
// console.log(marvel);

marvel.concat(dc)
// console.log(marvel);                //[ 'Thor', 'Ironman', 'Spider-Man' ]
// console.log(marvel.concat(dc));     //[ 'Thor', 'Ironman', 'Spider-Man', 'Batman', 'Superman', 'Flash' ]

// spread
const all_heros =[...marvel,...dc]
// console.log(all_heros); 

const an_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_array = an_array.flat(Infinity)
// console.log(another_array);

console.log(Array.isArray("Arvind"));
console.log(Array.from("Arvind"));
console.log(Array.from({name: "Arvind"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));