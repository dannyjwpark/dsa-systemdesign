// O(n) space
function tabulatedFib(n) {
    // create a blank array of length `n`
    let table = new Array(n);

    // seed the first two values
    table[0] = 0;               
    table[1] = 1;

    // complete the table by moving from left to right,
    // following the fibonacci pattern
    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
    
}


// O(1) space
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let secondLast = 0
    let last = 1;

    for (let i = 2; i <= n; i++) {
        let temp = last;
        last = last + secondLast;
        secondLast = temp;
    }

    return last;
}

console.log(tabulatedFib(7));      // => 13
console.log(fib(7));      // => 13

// Big O
// dominant operation: for loop used to fill out the table
  // length of table ~= n
  // O(n) runtime
  // O(n) space