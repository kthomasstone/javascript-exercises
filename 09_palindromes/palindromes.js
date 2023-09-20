const palindromes = function(phrase) {
  // store value of argument in variable as a string.
  let cleanedPhrase = String(phrase)
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  // convert string to an array of letters
  let forwardArray = cleanedPhrase.split("");
  console.log(forwardArray);

  // create "backwards" variable that stores the forward array of letters into a backwards array of letters
  let reversedArray = forwardArray.slice().reverse();
  console.log(reversedArray);

  // loop over the backwards array and see if each character matches each character of the forwards array
  let isPalindrome = true;
  for (let i = 0; i < forwardArray.length; i++) {
    if (forwardArray[i] !== reversedArray[i]) {
      isPalindrome = false;
    }
  }

  if (isPalindrome === true) {
    console.log("it's a palindrome!");
    return true;
  } else {
    console.log("not a palindrome...");
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
