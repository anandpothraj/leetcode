// 171. Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.


var titleToNumber = function(s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    let n = s.length;
    let number = 0;
    for(let i=0; i<n ; i++){
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n-i-1);
    }
    return number;
};

console.log(titleToNumber('A'));   // 1
console.log(titleToNumber('B'));   // 2
console.log(titleToNumber('C'));   // 3
console.log(titleToNumber('AB'));  // 28
console.log(titleToNumber('ZY'));  // 701