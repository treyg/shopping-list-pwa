var button = document.getElementById("enter"); //Store selected elements as variables
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");



let list = []

const listJSON = localStorage.getItem('list')

if (listJSON !== null) {
    list = JSON.parse(listJSON)
}


function inputLength() {
  // Check to make sure input has a value
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li"); //Create li element
  var cb = createCheckBox();
  li.appendChild(cb); //append the checkbox to the ul element
  li.appendChild(document.createTextNode(input.value)); // add the value of the input variable (li element) to the document at the end of ul
  ul.appendChild(li);
  input.value = ""; //Return input to empty after li is added
  cb.addEventListener("click", () => {
    //Add event listener on click to toggle css strike through class
    li.classList.toggle("strikethrough");
  });
  
  // push ul text content to list array
  list.push(li.textContent)

  //Save list array to local storage
  localStorage.setItem('list', JSON.stringify(list))

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

button.addEventListener("click", addListAfterClick); //ON click, run the function to create a list elemeent on click

input.addEventListener("keypress", addListAfterKeypress); //On keypress enter, run the function to create list element after pressing enter

//button to remove selected elements

function removeElt() {
  // create function to remove seleted items
  var doneItems = document.getElementsByClassName("strikethrough"); // create var for all elements with strikethrough class
  while (doneItems.length > 0) {
    doneItems[0].parentNode.removeChild(doneItems[0]); //for eache strikethrough element with length > 0, remove
  }
}

var remove = document.getElementById("removeItem"); //create variable for remove button

remove.addEventListener("click", removeElt); //on click for button, run function to remove selected items


getList = function () {
  
}