// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3^x.

// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

//recursion
function powerOfThree(num) {
  if (num / 3 == 1) {
    return true;
  }
  if (num % 3 == 0) {
    return powerOfThree(num / 3);
  } else {
    return false;
  }
}

//loop
function powerOfThreeLoop(num) {
  while (num > 1) {
    if (num % 3 != 0) {
      return false;
    }
    if (num / 3 == 1) {
      return true;
    }
    num = num / 3;
  }
}

console.log(powerOfThreeLoop(27));
