//find Fibonacci's number at index n
//use tabulation this time

const fibTab = n => {
  let table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

console.log(fibTab(40));
