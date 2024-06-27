// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function(n) {
    const seen = new Set();
    while(n !== 1 && !seen.has(n)){
        seen.add(n);
        let total = 0;
        while(n > 0){
            let digit = n%10;
            total += digit**2;
            n = Math.floor(n/10);
        }
        n = total;
    }
    return n === 1;
};

console.log(isHappy(2));     // false
console.log(isHappy(19));    // true