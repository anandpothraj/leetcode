// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let result = 0;
    nums.forEach(n => {
        result = n ^ result;
    });
    return result;
};

console.log(singleNumber([2,2,1]))  // 1
console.log(singleNumber([4,1,2,1,2]))  // 4
console.log(singleNumber([1]))  // 1
console.log(singleNumber([1,1,2,2,3,3,4]));  //4