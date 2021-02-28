//find any combination of arr elements for sum up into targetSum
//targetSum = 7
//arr = [2,3,5]

//answer: 2,2,3 or 2,5 (sorting doesn't matter)

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    //memo[remainer] = howSum(remainder, numbers);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return memo[targetSum];
};

console.log(howSum(300, [7, 14])); //returns null
