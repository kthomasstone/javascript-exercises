const removeFromArray = function (theArray, ...itemToRemove) {
  let newArray = [];

  theArray.filter((element) => {
    if (!itemToRemove.includes(element)) {
      newArray.push(element);
    }
  });

  console.log(newArray);
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
