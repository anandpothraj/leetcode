// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function(numRows) {
    let result = [];
    for(let i=0; i<numRows; i++){
        let singleEntry = [];
        for(let j=0; j<=i; j++){
            if(j===0 || j===i){
                singleEntry.push(1);
            }
            else{
                singleEntry.push(result[i-1][j-1] + result[i-1][j]);
            }
        }
        result.push(singleEntry);
    }
    return result;
};

console.log(generate(1));   // [[1]]
console.log(generate(2));   // [[1],[1,1]]
console.log(generate(3));   // [[1],[1,1],[1,2,1]]
console.log(generate(4));   // [[1],[1,1],[1,2,1],[1,3,3,1]]
console.log(generate(5));   // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]