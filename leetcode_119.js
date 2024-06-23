// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var getRow = function(rowIndex) {
    let result = [1];
    for(let i=0; i<rowIndex; i++){
        let newRow = new Array(result.length+1).fill(0);
        for(let j=0; j<result.length; j++){
            newRow[j] += result[j];
            newRow[j+1] += result[j];

        }
        result = newRow;
    }
    return result;
};

console.log(getRow(0));       // [1]
console.log(getRow(1));       // [1,1]
console.log(getRow(2));       // [1,2,1]
console.log(getRow(3));       // [1,3,3,1]