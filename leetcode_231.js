// 231. Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.


var isPowerOfTwo = function(n) {
    if(n===0) return false;
    return Math.floor(Math.log2(n)) === Math.ceil(Math.log2(n));
};

console.log(isPowerOfTwo(1));      // true
console.log(isPowerOfTwo(16));     // true
console.log(isPowerOfTwo(3));      // false