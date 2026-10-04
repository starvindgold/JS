const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children); // This line logs the HTMLCollection of child elements of the 'parent' element to the console.
// console.log(parent.children[1].innerHTML); // This line logs the inner HTML content of the second child element of the 'parent' element to the console.

// for (let i=0;i<parent.children.length;i++){
//     console.log(parent.children[i].innerHTML); // This line logs the inner HTML content of each child element of the 'parent' element to the console.
// }

parent.children[1].style.color = 'orange'; // This line changes the background color of the first child element of the 'parent' element to green.

// console.log(parent.firstElementChild.innerHTML); // This line logs the inner HTML content of the first child element of the 'parent' element to the console.
// console.log(parent.lastElementChild.innerHTML); // This line logs the inner HTML content of the last child element of the 'parent' element to the console.

const dayOne = document.querySelector('.day'); // This line selects the first HTML element with the class name 'day' and assigns it to the variable 'dayOne'.
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("NODES:", parent.childNodes); // This line logs the NodeList of child nodes of the 'dayOne' element to the console.