const number = Math.floor(Math.random() * 1000);
const repeatString = function (theString, num) {
  let totalString = "";

  for (let i = 0; i < num; i++) {
    totalString += theString;
  }
  if (num < 0) {
    totalString = "ERROR";
  }

  return totalString;
};
repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("hey", number);
repeatString("hey", "");

// Do not edit below this line
module.exports = repeatString;
