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
 * @return {number}
 */
var goodNodes = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    
    let count = 0;
    
    function DFS(node, max){
        if(!node) return;
        
        if(node.val >= max) count++;
        max = Math.max(max, node.val);
        if(node.left) DFS(node.left, max);
        if(node.right) DFS(node.right, max);
    }

    DFS(root, root.val);
    return count;
};