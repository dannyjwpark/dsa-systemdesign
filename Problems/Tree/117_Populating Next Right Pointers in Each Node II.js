/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// 1) BFS
// Time: O(N)
  // b/c each node is processed exactly once (popping node from queue & establishing the next pointers)
// Spce: O(N)
  // b/c binary tree: last level contains N/2 nodes
  // space complexity of BFS traversal: max space occupied 
  // space occupied by the queue: dependent upon max # of nodes in particular level
  
var connect = function(root) {
    if(!root) return root;
    
    let queue = [root];
    
//     outer while loop which iterates over each level
    while(queue.length){
        let qlength = queue.length;
        
//         iterates over all the nodes on the current level
        for(let i=0; i<qlength; i++){
            let node = queue.shift();
            
//             only establish connections for the nodes before the last node of current level
            if(i < qlength - 1) node.next = queue[0];
            
//             add the children, if any, to the back of the queue
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
//     return the modified tree
    return root;
};