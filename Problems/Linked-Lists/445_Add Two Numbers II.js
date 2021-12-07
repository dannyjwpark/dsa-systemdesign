/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    // create a new node to build added numbers' list
    let l3 = new ListNode(0);
    
    while(stack1.length || stack2.length){
        let sum = 0;
        
        // working from ends of each lists
        if(stack1.length) sum += stack1.pop();
        if(stack2.length) sum += stack2.pop();
        
        sum += l3.val; // initially 0
        l3.val = sum % 10;
        
        let head = new ListNode(Math.floor(sum/10));    // /10 to pass on the ten's digit from previous node
        head.next = l3;
        l3 = head;
    }
    
    return (l3.val === 0) ? l3.next : l3;  
};

// Big O
// O(N)