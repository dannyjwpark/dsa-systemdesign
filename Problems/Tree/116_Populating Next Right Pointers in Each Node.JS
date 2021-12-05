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

var connect = function(root) {
  if(!root) return root;
  
  let queue = [root];
  
  while(queue.length){
    let next = [];
    while(queue.length){
      let node = queue.shift();
      // currently, queue is empty with node being root, so next would be null
      // next iteration, root.left.next would be root.right
      // next, root.right.next would be null
      node.next = queue[0] || null;
      if(node.left){
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};


// 2) DFS
var connect = function(root) {
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left:null;
  connect(root.left);
  connect(root.right);
  return root;
}