"use strict";


/*

Code a function createNumberDiv that creates a div, assigns a random number (0-99)
as the HTML-content of that div (innerHTML) and returns the reference to the
newly created div.

Note that the newly created div must not be appended inside the function createNumberDiv.
The must happen outside the function.


TEST:
document.querySelector("body").appendChild( createNumberDiv() )
This must append a div with a random number to the body each time it is called.


*/

function createNumberDiv () {
    let create = document.createElement("div");
    create.innerHTML = randomNumber (100);

    function randomNumber ( max ) {
        return Math.floor( max * Math.random() );
      }

    return create;
}

document.querySelector("body").appendChild( createNumberDiv() );
