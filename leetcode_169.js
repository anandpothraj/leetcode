// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
    let majorElem;
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(count == 0){
            majorElem = nums[i];
        }
        if(nums[i] == majorElem){
            count += 1;
        }
        else{
            count -= 1;
        }
    }
    return majorElem;
};

console.log(majorityElement([3,2,3]));                 // 3 
console.log(majorityElement([2,2,1,1,1,2,2]));         // 2