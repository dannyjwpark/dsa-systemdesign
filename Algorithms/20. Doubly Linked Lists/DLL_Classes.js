// vs singly linked list
  // pop: do not have to iterate to last element from the beginning
    // insted, can just go to tail & use .prev and work backwards
  
  // more flexibility, but more memory


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}


// Big O of Singly Linked Lists
// Insertion : O(1);
// Removal: O(1) 
// Searching: O(N)  -> technically O(N/2)
// Access: O(N)
