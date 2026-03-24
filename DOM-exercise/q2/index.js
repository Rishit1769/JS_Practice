// Traversing the DOM
list = document.getElementById("citiesList")
btn = document.getElementById("highlightFirstCity")

btn.addEventListener('click',function(){
    list.firstElementChild.style.backgroundColor = 'red'
})