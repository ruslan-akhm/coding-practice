// Given an array arr[] of integers, find out the maximum difference between any two elements
// such that larger element appears after the smaller number.

// Examples :

// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.

function maxDIff(arr) {
  //splice array at max element
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(Math.max(...arr)) + 1);
  let min = Math.min(...arr);
  return max - min;
}

console.log(maxDIff([7, 9, 5, 6, 3, 2]));
