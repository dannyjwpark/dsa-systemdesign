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
// var countUnivalSubtrees = function(root) {
//     if(!root) return 0;
    
//     let counter = {};
    
//     function traverse(node){
//         counter[node.val] ? counter[node.val] ++ : counter[node.val] = 1;
        
//         // console.log(counter);
//         if(node.left) traverse(node.left);
//         if(node.right) traverse(node.right);
//     }
//     traverse(root);
    
//     if(counter[root.val]) counter[root.val]--;
    
//     let entries = Object.entries(counter);
//     let max = 0;
    
//     for(let i=0; i<entries.length; i++){
//         if(entries[i][1] > max) max = entries[i][1];
//     }
    
    
//     return max;
// };

var countUnivalSubtrees = function(root) {
    let count = 0;
    
    findAllSubTrees(root);
    
    return count;
    
    function findAllSubTrees(node) {
        if (node == null) return true;
     
        const left = findAllSubTrees(node.left);
        const right = findAllSubTrees(node.right);
        
        if (!left || !right) return false;
        
        if (node.left != null && node.left.val != node.val) return false;
        if (node.right != null && node.right.val != node.val) return false;
        
        count++;
        return true;
    }
};