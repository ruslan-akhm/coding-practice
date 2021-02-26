//You are in a table of a size of N x M. Being at the start position at the top left corner, you need to reach the finish
//at the bottom right corner. You can only move down or right and only one table cell at a time

//In how many different combinations can you reach the finish

function table(n, m, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (n == 0 || m == 0) return 0;
  if (n == 1 && m == 1) return 1;
  memo[key] = table(n - 1, m, memo) + table(n, m - 1, memo);
  return memo[key];
}

console.log(table(18, 18));
