// singly linked list: superior to array in insertion and deletion
// arrays: contain built-in index, whereas Linked Lists do not

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")




// Big O of Singly Linked Lists
// Insertion : O(1);
// Removal: 
  // best (removing from the beginning): O(1) 
  // average/worst (removing at the end): O(N)
// Searching: O(N)
// Access: O(N)


