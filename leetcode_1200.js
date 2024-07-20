// 1200. Minimum Absolute Difference

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

var minimumAbsDifference = function(arr) {
    let minAblosute = Infinity;
    let output = [];
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        const minus = arr[i + 1] - arr[i];
        if (minus < minAblosute) {
            minAblosute = minus;
            output = [[arr[i], arr[i + 1]]];
        } else if (minus === minAblosute) {
            output.push([arr[i], arr[i + 1]]);
        }
    }
    return output;
};

console.log(minimumAbsDifference([1,3,6,10,15]));                // [[1,3]]
console.log(minimumAbsDifference([40,11,26,27,-20]));            // [[26,27]] 
console.log(minimumAbsDifference([4,2,1,3]));                    // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));    // [[-14,-10],[19,23],[23,27]] 