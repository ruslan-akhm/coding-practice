//print out Fibonacci series of N numbers

//for loop
function findFibonacci(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) arr.push(i);
    else arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

console.log(findFibonacci(5));
