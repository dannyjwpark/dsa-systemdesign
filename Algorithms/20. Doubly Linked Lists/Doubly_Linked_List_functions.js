class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
          // make the newly created node the current tail's next
            this.tail.next = newNode;
          // assign the current tail a newly created node's prev
            newNode.prev = this.tail;
          // make the newly created node a tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.head) return undefined;

        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(this.length === 0) return undefined;

        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
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
        var removedNode = this.get(index - 1);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        return removedNode;
    }


    print(){
      var arr = [];
      var current = this.head
      while(current){
          arr.push(current.val)
          current = current.next
      }
      console.log(arr);
    }
}

// push
var list = new DoublyLinkedList()
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
