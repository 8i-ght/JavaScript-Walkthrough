// Fibonnaci Basics
function fibonacci(n) {
    if (n <= 2) return 1;

    // Recursive Function call
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized
function memoizedFibonacci(n, memo) {
    // Memoization Initalization
    memo = memo || {};

    // Memoization Call
    if (memo[n]) return memo[n];

    // Base Case
    if (n <= 2) return 1;
    
    // Recursive Function call
    return (memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo));
}

const TenthFibonacciNumber = memoizedFibonacci(10);
console.log('TenthFibonacciNumber:', TenthFibonacciNumber);

// Memoized HOF
function fibonacciRecursion(n) {
    // Base Case
    if (n <= 2) return 1;

    // Recursive Function call
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

function memoizer(fun) {
    let cache = {};

    return function (n) {
        if (cache[n] != undefined) {
            return cache[n];
        } else {
            let result = fun(n);
            cache[n] = result;

            return result;
        }
    };
}

const fibonacciMemoHOF = memoizer(fibonacciRecursion);
console.log('fibonacciMemoHOF:', fibonacciMemoHOF(10));
console.groupEnd();

// MEMOIZATION REVIEW:
/*
memoization is a way of optimizing your programs so the execution time is reduced, the way this happens is by storing the results of function calls in data structures and retrieves the results whenever they are needed

You should only really memoize when performance is an issue
*/

