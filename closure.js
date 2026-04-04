function outer(){
    let count = 4;
    return function(){
        count++
        return count
    }
}

let increment = outer()
console.log(increment())