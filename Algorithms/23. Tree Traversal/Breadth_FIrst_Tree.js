// BFT: working across the tree
  // visit every sibling node before visiting child

// strategy:
  // create a QUEUE & a variable to store the values of nodes visited
  // place the root node in the queue
  // loop as long as there is anything in the queue
    // dequeue a node from the queue & push the valuee of the node into letiable that store the nodes
    // if there is a left property on the node dequeued
      // add it to the queue
    // if there is a right property on the node dequeued
      // add it to the queue
  // return the variable that stores the values

  // traversed ITERATIVELY

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while(true){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
        current.left = newNode;
        return this;
        }
        current = current.left;
      } else {
          if(current.right === null){
            current.right = newNode;
            return this;
          } 
        current = current.right;
      }
    }
  }

  find(value){
    if(this.root === null) return false;
    let current = this.root,
    found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  contains(value){
    if(this.root === null) return false;
    let current = this.root,
      found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS(){
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while(queue.length){
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
}


//      10
//   6     15
// 3  8  13  20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
    

