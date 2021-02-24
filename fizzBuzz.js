//Well known fizz buzz challenge;
//1 - 100; if dividable by 3 - fizz; if by 5 - buzz; if both 3 & 5 - FizzBuzz

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    console.log(
      i % 3 == 0 ? (i % 5 == 0 ? "FizzBuzz" : "Fizz") : i % 5 == 0 ? "Buzz" : i
    );
  }
  return;
}

console.log(fizzBuzz(100));
