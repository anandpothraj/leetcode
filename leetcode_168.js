// 168. Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        columnNumber = Math.floor((columnNumber - 1)/26);
        result = String.fromCharCode(remainder+65) + result;
        
    }
    return result;
};

console.log(convertToTitle(1));      // 'A'
console.log(convertToTitle(2));      // 'B'
console.log(convertToTitle(3));      // 'C'
console.log(convertToTitle(28));     // 'AB'
console.log(convertToTitle(701));    // 'ZY'