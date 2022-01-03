/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let single = head;
    let double = head;
    
    while(double && double.next){
        double = double.next.next;
        single = single.next;
        
        if(double && double === single){
            return true;
        }
    }
    return false;
};




// Time Complexity: O(N)
// Space Complexity: O(1)

// Algorithm
// Use 2 pointer. And looping the given linked list.
// The pointer double is faster one which passes though double nodes per step.
// Another pointer single is slower one which passes though single node per step.
// the pointer double and single gonna meets, if there are cycle. We gonna stop the looping and return true.
// Eventually pointer meets end of the node, if there are no cycle. We gonna stop the looping and return false.
