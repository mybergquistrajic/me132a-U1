"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

function gridMaker (gridContainer, R, C) {
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  
    for (let i = 0; i < R * C; i++) {
      gridContainer.appendChild(createNumber());
    }

  }
  
  function createNumber () {
    let number = document.createElement('div');
    number.innerHTML = randomNumber(100);
    number.addEventListener("click", function(){number.classList.toggle("selected");});

    function randomNumber (max) {
      return Math.floor(max * Math.random());
    }
  
    return number;
  }
  
  gridMaker(document.querySelector('#grid'), 4, 6);

