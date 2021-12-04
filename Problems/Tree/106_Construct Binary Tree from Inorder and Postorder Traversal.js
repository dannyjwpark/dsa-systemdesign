/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {    
    let hash = {};
    for (let i=0;i<inorder.length;i++) hash[inorder[i]] = i; 
    
    let recur = function(start, end) {
        // base case
        if (start > end) return null;
        
        // last node of postorder is always be root of a subtree
        let val = postorder.pop();
        let root = new TreeNode(val);
        
        // since postorder is originally traversed left -> right -> root, 
        // to go reverse order, start with right tree
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }
    
    return recur(0, inorder.length - 1);  
};