// DOM Exercise Q2 - Traversing the DOM and Applying Styles
// Objective: Access a specific child element and modify its styling

// Get the list element from the DOM
list = document.getElementById("citiesList")

// Get the button element
btn = document.getElementById("highlightFirstCity")

// Attach click event listener to the button
btn.addEventListener('click',function(){
    // firstElementChild - Property that selects the first child element node
    // Returns the first <li> element inside the <ul>
    // style object - Allows access to CSS properties
    // Properties are written in camelCase (backgroundColor not background-color)
    list.firstElementChild.style.backgroundColor = 'red'
})