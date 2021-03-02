// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

const rotateArray = (nums, k) => {
  let temp = nums.splice(nums.length - k, k);
  nums.unshift(...temp);
  return nums;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
