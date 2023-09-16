const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, nextNum) => total + nextNum, 0);
};

const multiply = function(array) {
  return array.length ? array.reduce((total, nextNum) => total * nextNum) : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

// multiply

const factorial = function(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
