//Medium challenge

function cutPizzaSlices(slices) {
    return function sharePizza(people) {
        return "Each person gets " + (slices / people).toFixed(2) + "slices of pizza";
    }
}

var sharePizza = sharePizzaSlices(8)
    console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
    console.log(sharePizza(3)); 
