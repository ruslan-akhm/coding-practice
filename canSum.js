//function takes number and array
//function should return a boolean indicating whether or not it is possible to
//generate the number using elements form the array

//you may use an element of the array as many times as needed

function canSum(targetSum, arr, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let elem of arr) {
    if (canSum(targetSum - elem, arr, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

console.log(canSum(300, [14, 7]));
