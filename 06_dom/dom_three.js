
const div = document.createElement('div'); 
// Creates a div element and returns it.
div.className = "main";
div.id =  Math.round(Math.random()*10+1);
div.setAttribute("title", "generated-title");
div.style.backgroundColor ="green";
div.style.padding ="12px";
// div.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
// Sets the inner text of the div to specified string.
const addText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.");
div.appendChild(addText);   
document.body.appendChild(div);
// Appends the div element to the body of the document.

console.log(div);


