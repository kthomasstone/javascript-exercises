const convertToCelsius = function (fahrTemp) {
  let celTemp;
  // °C = (°F - 32) * 5/9
  celTemp = ((fahrTemp - 32) * (5 / 9)).toFixed(1);
  celTemp = Number(celTemp);
  console.log(celTemp);
  return celTemp;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

const convertToFahrenheit = function (celTemp) {
  let fahrTemp;
  // °F = (°C × 9/5) + 32
  fahrTemp = (celTemp * (9 / 5) + 32).toFixed(1);
  fahrTemp = Number(fahrTemp);
  console.log(fahrTemp);
  return fahrTemp;
};

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
