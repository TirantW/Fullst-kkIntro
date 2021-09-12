// Oppgave 1
const textRemove = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");

const removeTxt = ()=>{
  textRemove.innerHTML = null;
};
removeBtn.addEventListener("click", removeTxt);

// Oppgave 2
const textChange = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

const changeTxt = ()=>{
  textChange.innerHTML = "Changed :)";
};

changeBtn.addEventListener("click",changeTxt);


// Oppgave 3
const input = document.getElementById("input");
const inputTxt = document.getElementById("input-text");

const removeWrittenTxt = ()=>{
  inputTxt.innerHTML = null;
};
removeWrittenTxt();

const newTxt = (event)=>{
  let letter = event.key;
  inputTxt.innerHTML += letter;
};

const removeOnKey = (key)=> {
  if(key.key === 'Enter'){
    removeWrittenTxt();
  }
};
input.addEventListener("keydown", newTxt);
input.addEventListener("keypress", removeOnKey)


// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ul = document.getElementById("ul");
const writeBtn = document.getElementById("write-list");

const createList = ()=>{
  myList.forEach((listElements) =>(ul.innerHTML += `<li>${listElements}</li>`))
};
writeBtn.addEventListener("click", createList);

// Oppgave 5
const placeHolder = document.getElementById("placeholder");
const select = document.getElementById("select");
const text = document.getElementById("text");
const crtBtn = document.getElementById("create");

const createElement = ()=>{
  let htmlElement = select.value;
  let newText = text.value;
  placeHolder.innerHTML += `<${htmlElement}>${newText}</${htmlElement}>`;
};
crtBtn.addEventListener("click", createElement);

// Oppgave 6
const unorderedList = document.getElementById("list");
const removeLiEleBtn = document.getElementById("remove-li");

const removeLiFromUl = ()=> {
  const lastEl = unorderedList.lastElementChild;
  if (lastEl){
    unorderedList.removeChild(lastEl);
  }
};
removeLiEleBtn.addEventListener("click", removeLiFromUl);

// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

const writeName = ()=> {
  let name = inputName.value;
  if(name && name.length >= 4){
    orderBtn.disabled = true;
    orderBtn.style ="border: 2px solid red";
  } else{
    orderBtn.disabled = false;
  }
};

inputName.addEventListener("keyup", writeName);

// Oppgave 8
const listParent = document.querySelector(".children");
const listChildren = listParent.querySelectorAll("li");
const brdClrBtn = document.getElementById("color");

const addBrdAndClr = ()=> {
  Array.from(listChildren).forEach((li, i) =>{
    if((i+1) % 2 === 0) {
      li.style ="border: 1px solid pink;";
    } else{
      li.style ="border: 1px solid green;";
    }
  });
};
brdClrBtn.addEventListener("click", addBrdAndClr);
