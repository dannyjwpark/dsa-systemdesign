/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// recursive

var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    
    let node = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return node;
    
};

// iterative

var reverseList = function(head) {
  let [prev, cur] = [null, head]
  while(cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
}

