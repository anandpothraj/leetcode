// 1122. Relative Sort Array

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

var relativeSortArray = function(arr1, arr2) {
    const lookup = new Map();
    const N = arr2.length;
    arr2.forEach((a, i) => {
        lookup.set(a, i);
    });
    return arr1.sort((a, b) => {
        a = lookup.has(a) ? lookup.get(a) : N + a;
        b = lookup.has(b) ? lookup.get(b) : N + b;
        return a - b;
    });
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));                // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));                         // [22,28,8,6,17,44]