/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hash = {};
    for (let i=0; i<inorder.length; i++) hash[inorder[i]] = i;
    
    let recur = function(start, end) {
        if(start > end) return null;
        
        // first node of pretorder is always a root of a subtree
        let val = preorder.shift();
        let root = new TreeNode(val);
        
        // since preorder is originally traversed root -> left -> right, 
        root.left = recur(start, hash[val]-1);
        root.right = recur(hash[val]+1, end);
        
        return root;
    }
    
    return recur(0, inorder.length - 1);
};