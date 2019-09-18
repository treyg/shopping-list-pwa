//Store selected elements as variables
var button = document.getElementById("enter"); 
var input = document.getElementById("userInput");
var ul = document.querySelector("#list");



function inputLength() {
  // Check to make sure input has a value
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li"); //Create li element
  var cb = createCheckBox();
  li.appendChild(cb); //append the checkbox to the ul element
// add the value of the input variable (li element) to the document at the end of ul
  li.appendChild(document.createTextNode(input.value)); 
  ul.appendChild(li);
  
  cb.addEventListener("click", () => {
    //Add event listener on click to toggle css strike through class
    li.classList.toggle("strikethrough");
  });
  
  // push ul text content to list array
  if(localStorage.list === undefined){
    localStorage.setItem("list", input.value.trim() + ',');
  }else{
    localStorage.list = localStorage.list.concat(input.value.trim() + ',');
  }
  input.value = ""; //Return input to empty after li is added

  li.contentEditable = 'true'
}




function createCheckBox(checked = false) {
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = false;
  cb.classList.add("checkstyle");
  return cb;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    //If input length is greater than zero, run function to create list element
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    //On keypress (enter), check to see if input > 0
    createListElement(); // if so, create list element
  }
}
//ON click, run the function to create a list element on click
button.addEventListener("click", addListAfterClick); 
//On keypress enter, run the function to create list element after pressing enter
input.addEventListener("keypress", addListAfterKeypress); 

//button to remove selected elements

function removeElt() {
  // create function to remove seleted items
  // create var for all elements with strikethrough class
  var doneItems = document.getElementsByClassName("strikethrough"); 
  console.log(doneItems);

  /*for (let i = 0 ; i < doneItems.length ; i++) {
      //for eache strikethrough element with length > 0, remove
    console.log( 'removeELT' + doneItems[i].textContent); 
    let patt = new RegExp(doneItems[i].textContent+',', "g");
    localStorage.setItem("list", list.replace(patt, ""));
   doneItems[i].parentNode.removeChild(doneItems[i]);
  }*/
  while (doneItems.length > 0) {
    let patt = new RegExp(doneItems[0].textContent+',', "g");
    localStorage.setItem("list", localStorage.list.replace(patt, ""));
    doneItems[0].parentNode.removeChild(doneItems[0]); 
  }

}
//create variable for remove button
var remove = document.getElementById("removeItem"); 
//on click for button, run function to remove selected items
remove.addEventListener("click", removeElt); 

function loadFromLocaleStorage(){
  if (localStorage.list){
    localStorage.list.split(',').forEach(item => {
      if (item !== ''){
      var li = document.createElement("li"); 
      var cb = createCheckBox();
      li.appendChild(cb); 
      li.appendChild(document.createTextNode(item)); 
      ul.appendChild(li);
      cb.addEventListener("click", () => {
        li.classList.toggle("strikethrough");});
      }
    });
  }
}

localStorage.clear();





