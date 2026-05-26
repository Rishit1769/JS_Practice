// DOM Exercise Q3 - Modifying Text Content
// Objective: Change the text content of an element when button is clicked

// getElementById() - Get the order element
let order = document.getElementById("coffeeOrder")

// Get the button element
let btn = document.getElementById("changeOrder")

// Attach click event listener
btn.addEventListener('click',function(){
    // textContent - Gets or sets the text content of an element
    // Similar to innerText, but doesn't include styling info
    order.textContent = "Espresso"
})