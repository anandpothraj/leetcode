// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
    if(root === null) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

console.log(invertTree([]));                      // []
console.log(invertTree([2,1,3]));                 // [2,3,1]
console.log(invertTree([4,2,7,1,3,6,9]));         // [4,7,2,9,6,3,1]