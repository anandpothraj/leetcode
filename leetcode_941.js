// 941. Valid Mountain Array

// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:

var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    let i=0;
    for(;i<arr.length-1;i++){
        if(arr[i] == arr[i+1]){
            return false;
        }
        if(arr[i+1] < arr[i]){
            break;
        }
    }
    if((arr.length-1)-i === 0 || i === 0) return false;
    for(;i<arr.length-1;i++){
        if(arr[i] == arr[i+1]){
            return false;
        }
        if(arr[i+1] > arr[i]){
            return false;
        }
    }
    return true;
};

console.log(validMountainArray([2, 1]));                 // false
console.log(validMountainArray([3, 5, 5]));              // false
console.log(validMountainArray([0, 3, 2, 1]));            // true
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));  // false
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]));  // false