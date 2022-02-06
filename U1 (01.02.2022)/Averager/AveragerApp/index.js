"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link:



// GLOBAL VARIABLES
// None allowed


// FUNCTION DECLARATIONS (in alphabetical order)
function adder ( _array ) {
    let sum = 0;
    for (let i = 0; i < _array.length; i++) { 
      sum = sum + _array[i];
    }
    return sum;
  }

  function averg ( _array ) {
    if (_array.length < 1){
      return ""; 
    } 
    return roundString(adder(_array)/ _array.length, 1); 
  }


function createNumber () {
    let number = document.createElement('div');
    number.innerHTML = randomNumber(100);
    number.addEventListener("click", function(){number.classList.toggle("selected");updateResults("selected");});
  
    function randomNumber (max) {
      return Math.floor(max * Math.random());
    }

    return number;
  }


function getArrayOfSelectedNumbers (className) {
    let arrayElements = Array.from(document.querySelectorAll("." + className));
    let arrayNumbers = [];
  
    for (let i = 0; i < arrayElements.length; i++) {
      let numberAsString = arrayElements[i].innerHTML;
      let number = parseInt(numberAsString);
      arrayNumbers.push(number);
    }
  
    return arrayNumbers;
  }


function gridMaker (gridContainer, R, C) {
    R = document.querySelector("#inputRows").value;
    C = document.querySelector("#inputCols").value;
    gridContainer = document.querySelector(`#grid`);
    gridContainer.innerHTML="";
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
    updateResults("selected");
  
    for (let i = 0; i < R * C; i++) {
      gridContainer.appendChild(createNumber());
    }
}

function roundString(numberWithManyDecimals, decimals){
    var rounded = Math.pow(10, decimals);
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
  }
  
  
function updateResults (className){
    let result = getArrayOfSelectedNumbers (className);
  
    let elementref = document.querySelector("#selected");
    let element = elementref.getElementsByTagName("span");
    element[0].innerHTML = result.join();  
  
    elementref = document.querySelector("#amount");
    element = elementref.getElementsByTagName("span");
    element[0].innerHTML = result.length; 
  
    elementref = document.querySelector("#sum");
    element = elementref.getElementsByTagName("span");
    element[0].innerHTML = adder(result); 
  
    elementref = document.querySelector("#average");
    element = elementref.getElementsByTagName("span");
    element[0].innerHTML = averg(result); 
  }


// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS
document.querySelector("button").addEventListener("click", gridMaker);



// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.