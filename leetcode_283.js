// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;
    while(right<nums.length){
        if(nums[right] !== 0){
            [nums[right], nums[left]] = [nums[left], nums[right]]
            left++;
        }
        right++;
    }
    return nums;
};

console.log(moveZeroes([0]));                // [0]
console.log(moveZeroes([0,0,1]));            // [1,0,0]
console.log(moveZeroes([0,1,0,3,12]));       // [1,3,12,0,0]