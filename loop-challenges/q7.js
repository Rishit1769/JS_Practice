/*Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas.*/

let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teas.forEach((tea) => {
  if (tea === "chai") {
    return; //break kaam nhi karta as foreach ek function wala block use karta hain 
  }
  availableTeas.push(tea);
});