// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(!root.left && !root.right) return targetSum === root.val;
    else{
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
};

console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22));       // true 
console.log(hasPathSum([1,2,3], 5));                                          // false