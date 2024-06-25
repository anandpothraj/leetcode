// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function(root) {
    if(!root) return true;
    return isSame(root.left, root.right);
};

function isSame(leftRoot, rightRoot){
    if( (!leftRoot && rightRoot) || (leftRoot && !rightRoot) || (leftRoot && rightRoot && leftRoot.val !== rightRoot.val) ){
        return false;
    }
    if(leftRoot && rightRoot){
        return isSame(leftRoot.left, rightRoot) && isSame(leftRoot.left, rightRoot.right)
    }
    return true;
}

console.log(isSymmetric([1,2,2,3,4,4,3]));          // true
console.log(isSymmetric([1,2,2,null,3,null,3]));    // fals

