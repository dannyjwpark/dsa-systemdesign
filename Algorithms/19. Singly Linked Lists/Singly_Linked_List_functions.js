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
    // push: adding a new node from the end of the Linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // pop: removing a node from the end of the Linked list
    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // unshift: adding a new node to the beginning of the Linked List
    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    // shift: removing a new node from the beginning of the Linked list
    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    // get: retrieving a node by its position in the Linked list
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    // set: changing the value of a node based on its position in the Linked list
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // adding a node to the Linked list at a specific position
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        // edge case 1: shifting 1st element
        if(index === 0) return this.shift();
        // edge case 2: popping last element
        if(index === this.length - 1) return this.pop();

        // get an element on previous index of input
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
      // assign head on a temp letiable node
      let node = this.head;
      // make the current head to tail
      this.head = this.tail;
      // make the tail the stored temp letiable
      this.tail = node;

      let next;
      let prev = null;
      for(let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    print(){
        let arr = [];
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}



// push
let list = new SinglyLinkedList()
list.push("good");
list.push("morning");
list.push("danny");
list.push("goodbye");
list.push("!");
console.log("pushed:");
console.log(list);
list.print();
console.log("------------------------------")

// pop
list.pop();
console.log("popped:");
console.log(list);
list.print();
console.log("------------------------------")

// unshift
list.unshift("Greetings, ");
console.log("unshift:");
console.log(list);
list.print();
console.log("------------------------------")

// shift
list.shift();
console.log("shift:");
console.log(list);
list.print();
console.log("------------------------------")

// get
console.log("get:");
console.log(list.get(1)); //morning
console.log(list.get(2)); //danny
console.log("------------------------------")

// set
console.log("set:");
list.set(2, "grace");
console.log(list.get(2));
console.log("------------------------------")

// insert
console.log("insert:");
list.insert(0, "First");
console.log(list.get(0));
list.print();
console.log("------------------------------")

// remove
console.log("remove:");
list.remove(0);
console.log(list.get(0));
list.print();
console.log("------------------------------")

// reverse
console.log("reverse:");
list.reverse();
list.print();
console.log("------------------------------")

