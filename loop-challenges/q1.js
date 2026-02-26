/*Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".
Store all teas before "chai" in a new array named selectedTeas.*/

let teaFlavours = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []

for(let i = 0;i<teaFlavours.length;i++){
    if(teaFlavours[i] == "chai"){
        break;
    }
    selectedTeas.push(teaFlavours[i])
}

console.log(selectedTeas)