const reverseString = function (stringToReverse) {
  // store new string in a variable
  let newString;
  // split the stringToReverse into an array, reverse the items, then join them back into a string
  newString = stringToReverse.split("").reverse().join("");
  // return the new string
  return newString;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
