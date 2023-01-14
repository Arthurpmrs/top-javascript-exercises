const reverseString = function (s) {
    result = ''
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i]
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
