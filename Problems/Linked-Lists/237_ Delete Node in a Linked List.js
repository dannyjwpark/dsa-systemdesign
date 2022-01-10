var deleteNode = function(node) {
  // only given a node to delete 

  // 1) set the node to be deleted's value to be its next node's value
  node.val = node.next.val;

  // 2) set the node to be deleted's next to the node's next-next one
  node.next = node.next.next;
};