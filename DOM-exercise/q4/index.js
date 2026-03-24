let btn = document.getElementById("addNewItem");
let list = document.getElementById("shoppingList");

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  list.appendChild(newItem);
});