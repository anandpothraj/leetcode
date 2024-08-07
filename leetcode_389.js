// 389. Find the Difference

// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

var findTheDifference1 = function(s, t) {
    let sSum = s.split('').reduce((acc, curr) => acc + curr.charCodeAt(0),0);
    let tSum = t.split('').reduce((acc, curr) => acc + curr.charCodeAt(0),0);
    return String.fromCharCode(tSum - sSum);
};

var findTheDifference2 = function(s, t) {
    let value = 0;
    let result = s + t;
    for(let i = 0;i<result.length; i++){
        value^=result.charCodeAt(i);
    }
    return String.fromCharCode(value);
};

console.log(findTheDifference1("", "y"));            // "y"
console.log(findTheDifference2("abcd", "abcde"));    // "e"