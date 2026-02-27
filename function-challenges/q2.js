/*Create a function named orderTea that takes one parameter, teaType. Inside this function, create another function named confirmOrder that returns a message like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result.*/

function orderTea(teaType){
    function confirmOrder(type){
        return `confirmed ${teaType}`
    }
    return confirmOrder(teaType)
}

console.log(orderTea("green tea"))