const sumAll = function (low, high) {
  // create variable that holds the sum total
  let total = 0;
  let error = "ERROR";

  if (low < 0 || high < 0) {
    console.log(error);
    return error;
  }

  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    console.log(error);
    return error;
  }

  if (low > high) {
    let tempNum = low;
    low = high;
    high = tempNum;
  }

  // create a for loop that begins at low and ends with high, adding each consecutive number to total
  for (let i = low; i <= high; i++) {
    total += i;
  }
  console.log(total);
  return total;
};

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
