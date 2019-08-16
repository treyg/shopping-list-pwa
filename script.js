

var button = document.getElementById("enter")         //Store selected elements as variables
var input = document.getElementById("userInput")
var ul = document.querySelector("ul")

function inputLength() {                              // Check to make sure input has a value
     return input.value.length
}

function createListElement() {
        var li = document.createElement("li");             //Create li element       
        li.appendChild(document.createTextNode(input.value)); // add the value of the input variable (li element) to the document at the end of ul
        ul.appendChild(li);
        input.value = "";                       //Return input to empty after li is added
        li.addEventListener('click',() => {            //Add event listener on click to toggle css strike through class         
                li.classList.toggle('strikethrough');          
        })
                            
}

function addListAfterClick() {
        if(inputLength() > 0) {            //If input length is greater than zero, run function to create list element
            createListElement();             
        }
}

function addListAfterKeypress(event) {                              
        if (inputLength() > 0  && event.keyCode === 13) {           //On keypress (enter), check to see if input > 0
            createListElement();                                     // if so, create list element
        }
}

button.addEventListener("click", addListAfterClick)           //ON click, run the function to create a list elemeent on click

input.addEventListener("keypress", addListAfterKeypress)      //On keypress enter, run the function to create list element after pressing enter


//button to remove selected elements


function removeElt() { // create function to remove seleted items
        var doneItems = document.getElementsByClassName("strikethrough"); // create var for all elements with strikethrough class
        while (doneItems.length > 0) {
          doneItems[0].parentNode.removeChild(doneItems[0]); //for eache strikethrough element with length > 0, remove
        }
      }

var remove = document.getElementById("removeItem") //create variable for remove button

remove.addEventListener('click', removeElt) //on click for button, run function to remove selected items
