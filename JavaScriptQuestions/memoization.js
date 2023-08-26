// Memoization using an object to store calculated results
const memo = {};

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Check if the result is already memoized
  if (memo[n]) {
    //console.log(n);
    return memo[n];
  }

  // Calculate and memoize the result
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

console.log(fibonacci(10)); // Calculate the 10th Fibonacci number
console.log(fibonacci(20)); // Calculate the 20th Fibonacci number
