const leapYears = function (year) {
  // Leap years are years divisible by four (like 1984 and 2004).
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    }
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);
// However, years divisible by 100 are not leap years (such as 1800 and 1900)
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)

// Do not edit below this line
module.exports = leapYears;
