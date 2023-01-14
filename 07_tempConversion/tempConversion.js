const convertToCelsius = function (Tf) {
  result = (Tf - 32) * (5 / 9)
  return (result != 0) ? Number(result.toFixed(1)) : result
};

const convertToFahrenheit = function (Tc) {
  result = (9 / 5) * Tc + 32
  return (result != 0) ? Number(result.toFixed(1)) : result
};

console.log(convertToCelsius(100))
console.log(convertToCelsius(32))
console.log(convertToFahrenheit(450))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
