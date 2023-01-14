const sumAll = function (number1, number2) {
    if (number1 < 0 || number2 < 0 ||
        typeof (number1) != "number" ||
        typeof (number2) != "number") {
        return "ERROR"
    }


    let initial, final
    if (number1 > number2) {
        initial = number2
        final = number1
    } else if (number2 > number1) {
        initial = number1
        final = number2
    } else {
        return number1
    }

    let total = 0
    for (let i = initial; i <= final; i++) {
        total += i
    }
    return total
};



// Do not edit below this line
module.exports = sumAll;
