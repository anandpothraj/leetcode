// 108. Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

var sortedArrayToBST = function(nums) {
    return ConvToBST(nums, 0, nums.length - 1);
};

var ConvToBST = function(nums, beg, end) {
	if (beg > end) return null;
	var mid = Math.ceil((beg + end) / 2);
	var root = new TreeNode(nums[mid]);
	root.left = ConvToBST(nums, beg, mid - 1);
	root.right = ConvToBST(nums, mid + 1, end);
	return root;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));   // [0,-3,9,-10,null,5]
console.log(sortedArrayToBST([1,3]));            // [3,1]