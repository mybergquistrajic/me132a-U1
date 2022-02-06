"use strict";


/*

By now:
You should have a program that, when the user clicks on the button, creates
a CSS-grid of R rows and C columns and fills the grid with random numbers between 0 and 99.
The values of R and C come from the input fields.

When the user clicks on a number, that number becomes selected (if it were deselected) or 
deselected (if it were selected). In other words, by clicking on a number, the user toggles
the class "selected" for that number.

Also, you have a function updateResults that, when called, updates the results.

Now you need to place the call to that function updateResults in the right place in the code so
that the results are updated each time the user selects or deselects a number.


VIDEO:  Record a video where you explain where you have placed all the lines
        required to update the results, and why.
        This video must be called placementExplanation

*/



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


document.querySelector("button").addEventListener("click", gridMaker);


function gridMaker (gridContainer, R, C) {
  R = document.querySelector("#inputRows").value;
  C = document.querySelector("#inputCols").value;
  gridContainer = document.querySelector(`#grid`);
  gridContainer.innerHTML="";
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  updateResults("selected")

  for (let i = 0; i < R * C; i++) {
    gridContainer.appendChild(createNumber());
  }
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

// SUM
function adder ( _array ) {
  let sum = 0;
  for (let i = 0; i < _array.length; i++) { 
    sum = sum + _array[i];
  }
  return sum;
}

// AVERAGE
function averg ( _array ) {
  // in here you must use adder
  if (_array.length < 1){
    return ""; 
  } 
  return roundString(adder(_array)/ _array.length, 1); 
}

function roundString(numberWithManyDecimals, decimals){
  // From: https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
}

