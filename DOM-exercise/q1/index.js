//Accessing DOM elements
let para = document.getElementById("paragraph");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    para.innerText = "The paragraph is changed"
});