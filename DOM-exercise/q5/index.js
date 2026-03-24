const list = document.getElementById("taskList");
const btn = document.getElementById("removeLastTask");

btn.addEventListener("click", function () {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    lastItem.remove();
  }
});