// DOM Exercise Q1 - Basic DOM Element Access and Event Handling
// Objective: Modify text content of a DOM element when a button is clicked

// getElementById() - Selects an HTML element by its id attribute
// Returns the first element with id="paragraph"
let para = document.getElementById("paragraph");

// Get the button element
let btn = document.getElementById("btn");

// addEventListener() - Attaches an event listener to the button
// Parameters: (eventType, callbackFunction)
// 'click' event fires when the button is clicked
btn.addEventListener("click",function(){
    // innerText - Gets or sets the text content of the element
    // This changes what the user sees in the paragraph
    para.innerText = "The paragraph is changed"
});