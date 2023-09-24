const fibonacci = function(position) {
  // make function accept strings
  let positionNumber = Number(position);

  if (isNaN(positionNumber)) {
    return "OOPS";
  }

  if (positionNumber < 0) {
    return "OOPS";
  }

  // create fibonacci array
  let sequence = [1, 1];

  // check for first index positions
  if (positionNumber === 0) {
    return 0;
  } else if (positionNumber === 1) {
    return 1;
  }

  // loop over array of numbers
  // index two ahead (plus two) is equal to the sum of two preceding indexes (this index plus next index)
  function doMath(sequence) {
    let indexA;
    let indexB;
    let nextNumber;
    for (let i = 2; i < positionNumber; i++) {
      // access the value of last index position
      indexA = sequence[i - 2];
      indexB = sequence[i - 1];
      nextNumber = indexA + indexB;
      sequence.push(nextNumber);
    }
    console.log(nextNumber);
    return nextNumber;
  }
  return doMath(sequence);
};

// Do not edit below this line
module.exports = fibonacci;
