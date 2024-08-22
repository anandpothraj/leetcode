// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var getRow = function(rowIndex) {
    let result = [1];
    for(let i=1; i<=rowIndex; i++){
        result[i] = result[i-1] * (rowIndex - i + 1) / i;
    }
    return result;
};

console.log(getRow(0));       // [1]
console.log(getRow(1));       // [1,1]
console.log(getRow(2));       // [1,2,1]
console.log(getRow(3));       // [1,3,3,1]
