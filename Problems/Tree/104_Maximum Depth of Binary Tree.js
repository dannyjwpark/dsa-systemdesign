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

var maxDepth = function(root) {
    if(!root) return 0;
    
    let data = [], queue = [];
    queue.push(root);
    
    while(queue.length){
        let queueLength = queue.length;
        let currentVals = [];
        
        for(let i=0; i<queueLength; i++){
            let current = queue.shift();
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
            
            currentVals.push(current.val);
        }
        data.push(currentVals);
    }

    return data.length;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2