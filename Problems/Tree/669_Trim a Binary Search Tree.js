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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    // base case: if !root, return []
    if(!root) return [];
    if(root.length === 1){
        if(root.val>= low && root.val <= high) return root;
    }
    
    // dfs preorder
    function traverse(node){
        if(!node){
            return null;
        } else if (node.val > high){
            return traverse(node.left)
        } else if (node.val < low) {
            return traverse(node.right)
        } else {
            node.left = traverse(node.left);
            node.right = traverse(node.right);
            return node;
        }
    }
    
    // return the helper function
    return traverse(root);
    
};