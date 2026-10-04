// reduce method
const numbers = [1, 2, 3, 4, 5];

// const myTotal = numbers.reduce((acc, currVa) => {
//     console.log(`acc: ${acc} and currVa: ${currVa}`)
//     return acc + currVa;
// }, 0);

const myTotal = numbers.reduce((acc, currVa) => acc + currVa, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 100
    },{
        itemName: 'Python Course',
        price: 200
    },{
        itemName: 'Mobile Dev Course',
        price: 300
    }, {
        itemName: 'Data Science Course',
        price: 400
    }
]

const priceToPay = shoppingCart.reduce((acc, currItem) => acc + currItem.price, 0);

console.log(priceToPay);