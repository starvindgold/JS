document.getElementById('myElement') ; // This line of code selects the HTML element with the ID 'myElement' and returns it as a DOM object.
document.getElementById('myElement').innerHTML = 'Hello, World!'; // This line changes the inner HTML content of the selected element.
document.getElementById('myElement').style.color = 'blue'; // This line changes the text color of the selected element.
// We can change other styles as well, such as font size, background color, etc.'

const title = document.getElementById('title'); // This line selects the HTML element with the ID 'title' and assigns it to the variable 'title'.
// You can now manipulate the 'title' element using the 'title' variable, such as changing its content or style.

title.style.backgroundColor = 'green'; // This line changes the background color of the 'title' element to green.
title.innerHTML; // This line retrieves the current inner HTML content of the 'title' element.
title.innerText; // This line retrieves the current text content of the 'title' element.
title.textContent; // This line retrieves the current text content of the 'title' element.
// Note that textContent is similar to innerText but does not consider CSS styles and hidden elements.

document.getElementsByClassName('heading'); // This line selects all HTML elements with the class name 'heading' and returns them as an HTMLCollection. You can then manipulate these elements using JavaScript, such as changing their content or style.
document.querySelector('h1'); // This line selects the first HTML element that matches the CSS selector 'h1' and returns it as a DOM object. You can then manipulate this element using JavaScript, such as changing its content or style.
document.querySelector('#title'); // This line selects the first HTML element that matches the CSS selector '#title' (an element with the ID 'title') and returns it as a DOM object.
document.querySelector('.heading'); // This line selects the first HTML element that matches the CSS selector '.heading' (an element with the class 'heading') and returns it as a DOM object.
document.querySelector('input[type="password"]'); // This line selects the first HTML input element with the type 'password' and returns it as a DOM object.
document.querySelector('p:first-child'); // This line selects the first HTML paragraph element that is a child of its parent and returns it as a DOM object.

const myul = document.querySelector('ul') ; // This line selects the first HTML unordered list (ul) element and assigns it to the variable 'myul'.
const turnGreen = myul.querySelector('li'); // This line selects the first list item (li) element within the 'myul' unordered list and assigns it to the variable 'turnGreen'.
turnGreen.style.backgroundColor = 'green'; // This line changes the background color of the selected list item to green.


//querrySelector only returns the first element that matches the specified selector.

document.querySelectorAll('li'); // This line selects all HTML list item (li) elements and returns them as a NodeList.

const tempLiList = document.querySelectorAll('li');

// tempLiList.style.color = "green"; 
// // This line will not work as expected because tempLiList is a NodeList, and you cannot directly set the style on a NodeList.

tempLiList[0].style.backgroundColor = 'green'; // This line changes the background color of the first list item to green.

// for querySelectorAll, even if a single element is returned, it will create a NodeList so we need to select the element to modify it.

tempLiList.forEach((li) => {});
// This line uses the forEach method to iterate over each list item in the NodeList and allows you to perform actions on each individual list item

tempLiList.forEach((l)=>{
l.style.backgroundColor = 'green'
}) ;

getElementByClassName('heading'); //
const tempClassList = document.getElementsByClassName('list-item');
// tempClassList.forEach((li)=>{console.log(li)}); 
// // It throws an error because getElementsByClassName returns an HTMLCollection.
// // HTMLCollection does not have the forEach method, so we need to convert it to an array first before using forEach.

const convertedList = Array.from(tempClassList); 
// converts the HTML Collection to an array.
// Now we can use forEach on the converted array.

convertedList.forEach( (l)=> {
  l.style.color = 'orange'
})