// add
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}
addLanguage("python");
addLanguage("typescript");

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptiLanguage("golang");

//edit
const secLang = document.querySelector("li:nth-child(2)");
//selects 2nd li element
const newLi = document.createElement("li");
//creates new li element followed by editing text content
newLi.textContent = "Mojo";
secLang.replaceWith(newLi);

const firLang = document.querySelector("li:nth-child(1)");
firLang.outerHTML = '<li>Typescript</li>';


// remove
const thiLang = document.querySelector("li:nth-child(3)");
thiLang.remove();



