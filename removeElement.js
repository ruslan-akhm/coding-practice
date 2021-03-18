// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array,
//you must do this by modifying the input array in-place with O(1) extra memory.

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3]
// Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
// Note that the order of those five elements can be arbitrary.
// It doesn't matter what values are set beyond the returned length.

const removeElement = function (nums, val) {
  if (nums.length === 0) return [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};
