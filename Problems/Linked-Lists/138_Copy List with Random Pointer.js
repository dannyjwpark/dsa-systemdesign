/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // 2 pass
  // 1. traverse all the nodes, clone them, put them into array
  
  const cloneMap = new Map()
  
  const getClone = (node) => {
    if (node == null) return null
    if (cloneMap.has(node)) return cloneMap.get(node)
    
    const clone = new Node(node.val, null, null)
    cloneMap.set(node, clone)
    return clone
  }
  
    // 2 traverse all the nodes, set the random based on the index
  
  const falseHead = new Node(0, head, null)
  const falseHeadClone = new Node(0, null, null)
  
  let p = falseHead
  let pClone = falseHeadClone
  
  while (p.next !== null) {
    
    const clone = getClone(p.next)
    clone.random = getClone(p.next.random)
    pClone.next = clone
    
    p = p.next
    pClone = pClone.next
  }

 
  return falseHeadClone.next
};