// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list,
// and each element in the array contains a single digit.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

const plusOne = nums => {
  let numbers = +nums.join("") + 1;
  (numbers + "").split("");
  return numbers;
};

console.log(plusOne([1, 3, 9]));
