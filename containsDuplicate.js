// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false

//Solution 1:

const containsDuplicate = arr => {
  const unique = [...new Set(arr)];
  if (unique.length !== arr.length) return false;
  return true;
};

console.log(containsDuplicate([1, 2, 3, 4, 5]));

//Solution 2

const containsDuplicate2 = arr => {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      return false;
    }
    hashTable[arr[i]] = true;
  }
  return true;
};

console.log(containsDuplicate2([1, 2, 3, 4, 5]));
