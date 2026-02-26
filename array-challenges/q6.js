//you have an array named popularTeas containing "greenTea","oolong tea" and "chai" create a soft copy of this array named "softCopyTeas"

let popularTeas = ["green tea","oolong tea","chai"]
let softCopyTeas = popularTeas
popularTeas.pop()

console.log(popularTeas)
console.log(softCopyTeas)