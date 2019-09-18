//Store selected elements as variables
var button = document.getElementById("enter"); 
var input = document.getElementById("userInput");
var ul = document.querySelector("#list");
const removeButtons = document.querySelector('.remove-buttons');


// removeButtons.style.visibility = "hidden"

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
  
  if(localStorage.list === undefined){
    localStorage.setItem("list", input.value.trim() + ',');
  }else{
    localStorage.list = localStorage.list.concat(input.value.trim() + ',');
  }
  input.value = ""; //Return input to empty after li is added

  // removeButtons.style.visibility = "visible"

}




function createCheckBox(checked = false) {
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = false;
  cb.className = "box"
  return cb;
}

function selectAllItems() {
  var items = document.getElementsByClassName('box');
  for (var i = 0; i < items.length; i++) {
      if (items[i].type == 'checkbox')
          items[i].checked = !items[i].checked;
      
  }
    ul.classList.toggle('strikethrough')
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
 

//create variable for remove button
var remove = document.getElementById("removeItem"); 
//on click for button, run function to remove selected items
remove.addEventListener("click", removeElt); 


//Pull list from local storage. Function ran on page load
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









