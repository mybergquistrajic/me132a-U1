'use strict'

/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/

/* Här har vi då övning 4e, och entligt instruktionerna kommer jag främst att gå igenom looparna i denna övning.

Vi har två olika loopar, både nested for-loops och en enkel for-loop. 

Den enkla forloopen består av countern i som har värdet 0, som inkrementeras med 1 för varje iteration.
Villkoret säger att loopen ska itereras sålänge i är mindre än R gånger C, alltså antalet rader gånger antalet kolumner. 
Detta vill vi eftersom att R gånger C ger oss det totala antalet rutor vi vill ha i vår grid, kan man säga.
Vad som sker i loopen är då att funktionen createNumber, som skapar en div med ett random nummer, appendas till gridContainer.
Och detta görs tills vi har kommit upp till R * C.

Våra nested for-loops består istället av två for-loops. Vår första loop, eller den yttersta loopen kan man
nästan säga, kommer att itereras sålänge vår counter är mindre än antalet kolumner, samt inkrementeras med 1 för varje iteration.
Det som itereras är då vår andra loop, eller din inre loopen. Denna loop kommer att itereras sålänge vår counter är mindre än
antalet rows, och inkrementeras med 1 för varje iteration. Och vad är det som sker inuti denna loop då? Jo, iprincip samma 
sak som den enkla loopen. Den appendar funktionen createNumber till gridContainer. 

Och i slutet testar vi funktionen gridMaker.
*/

function gridMaker (gridContainer, R, C) {
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

  for (let i = 0; i < R * C; i++) {
    gridContainer.appendChild(createNumber());
  }

  // for (let c = 0; c < C; c++) {
  //   for (let r = 0; r < R; r++) {
  //     gridContainer.appendChild( createNumber() );
  //   }
  // }
}

function createNumber () {
  let number = document.createElement('div');
  number.innerHTML = randomNumber(100);

  function randomNumber (max) {
    return Math.floor(max * Math.random());
  }

  return number;
}

gridMaker(document.querySelector('#grid'), 4, 6);
