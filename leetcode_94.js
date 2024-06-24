// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    let result = [];
    helper(root, result);
    return result;
};

function helper(root, result){
    if(root !== null){
        helper(root.left, result);
        result.push(root.val);
        helper(root.right, result);
    }
}


console.log(inorderTraversal([1, null, 2, 3]));     // [1,3,2]
console.log(inorderTraversal([]));                  // []
console.log(inorderTraversal([1]));                 // [1]