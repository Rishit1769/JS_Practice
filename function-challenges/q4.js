// Write a function named processTeaOrder that takes another function, makeTea, as a parameter and calls it with the argument "earl grey". Return the result of calling makeTea.

function makeTea(teaType) {
    return `Making ${teaType}`;
}

function processTeaOrder(makeTea) {
    return makeTea("earl grey");
}

console.log(processTeaOrder(makeTea)); 