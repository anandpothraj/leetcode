// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
let last = m + n - 1;
    while(m>0 && n>0){
        if(nums1[m-1] > nums2[n-1]){
            nums1[last] = nums1[m-1];
            m--;
        }
        else{
            nums1[last] = nums2[n-1];
            n--;
        }
        last--;
    }
    while(n>0){
        nums1[last] = nums2[n-1];
        n--;
        last--;
    }
    return nums1;
};

console.log(merge([1],1,[],0))                // [ 1 ]
console.log(merge([0],0,[1],1))               // [ 1 ]
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3)) // [ 1, 2, 2, 3, 5, 6 ]