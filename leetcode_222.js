// 222. Count Complete Tree Nodes

// Given the root of a complete binary tree, return the number of the nodes in the tree.
// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
// Design an algorithm that runs in less than O(n) time complexity.

function countingTraversal(root, num){
    if(root===null) return;
    else root[0] = root[0]+1;
    countingTraversal(root.left);
    countingTraversal(root.right);
}

var countNodes = function(root) {
    let num = [0];
    countingTraversal(root, num);
    return num[0];
};

console.log(countNodes([]));              // 0
console.log(countNodes([1]));             // 1
console.log(countNodes([1,2,3,4,5,6]));   // 6