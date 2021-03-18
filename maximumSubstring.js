// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = nums => {
  let tempMax = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i] + tempMax) {
      tempMax = nums[i];
    } else {
      tempMax = tempMax + nums[i];
    }
    if (tempMax > maxSum) {
      maxSum = tempMax;
    }
  }

  return maxSum;
};
