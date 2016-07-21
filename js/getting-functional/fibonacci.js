// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

// var number = 7;

// Example Output

// 13


var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
console.log(looping)

// var i;
// var fib = []; // Initialize array!

// fib[0] = 0;
// fib[1] = 1;
// for(i=2; i<=10; i++)
// {
//    // Next fibonacci number = previous + one before previous
//    // Translated to JavaScript:
//    fib[i] = fib[i-2] + fib[i-1];
//    alert(fib[i]);


// function fibCheck
