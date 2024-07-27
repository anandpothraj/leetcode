// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return null;
};

console.log(twoSum([2,7,11,15],9)); // Output: [0,1]
console.log(twoSum([3,2,4],6)); // Output: [1,2]
console.log(twoSum([3,3],6)); // Output: [0,1]