// Memoization (O(N)) runtime

let memo = {};

function factorial(n) {
  // if arg is already in the memo, then fetch the value
  if (n in memo) {
    console.log('fetching memo for', n);
    return memo[n];
  };
  
  if (n===1) return 1;

  // otherwise, the arg is not in the memo, so calculate it recursively, but store the answer in the memo for later
  let ans = n * factorial(n-1);
  console.log('storing memo for ', n)
  memo[n] = ans;

  return ans;
}

console.log(factorial(10));

console.log(memo);