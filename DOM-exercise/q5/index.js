// DOM Exercise Q5 - Removing DOM Elements
// Objective: Remove the last element from a list when button is clicked

// Get the task list element
const list = document.getElementById("taskList");

// Get the button element
const btn = document.getElementById("removeLastTask");

// Attach click event listener to button
btn.addEventListener("click", function () {
  // lastElementChild - Property that selects the last child element
  // Returns the last <li> element in the list
  const lastItem = list.lastElementChild;
  
  // Check if lastItem exists (not null) before trying to remove it
  if (lastItem) {
    // remove() - Deletes the element from the DOM
    // This removes the element completely from the page
    lastItem.remove();
  }
});