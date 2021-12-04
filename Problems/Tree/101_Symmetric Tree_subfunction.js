/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null) return true;
    
    return isMirror(root.left, root.right);
};

function isMirror(left, right){
    if(left === null && right === null) return true;
    if(left === null || right === null) return false;
    if(left.val !== right.val) return false;
    
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
}

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Input: root = [1,2,2,null,3,null,3]
// Output: false
