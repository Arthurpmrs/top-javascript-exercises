function contains(item, elements) {
    for (const element of elements) {
        if (element === item) {
            return true
        }
    }
    return false
}



const removeFromArray = function (arr, ...elementsToRemove) {
    const newArr = []
    for (const item of arr) {
        if (!contains(item, elementsToRemove)) {
            newArr.push(item)
        }
    }
    return newArr
};



// Do not edit below this line
module.exports = removeFromArray;
