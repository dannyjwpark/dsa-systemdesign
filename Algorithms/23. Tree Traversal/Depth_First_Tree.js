// DFT: working vertically
  // InOrder: from left-bottom child, verticall up
    // used commonly w/ BSTs
    // useful for ordering nodes in increasing order
  // PreOrder: from root, vertically down
    // can be used to "export" a tree structure for easy copying or reconstruction
  // PostOrder: from left-bottom child, horizontally up

  // traversed RECURSIVELY

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
  DFSPreOrder(){
    let data = [];  // stores values of nodes visited
    function traverse(node){
      data.push(node.value);  // visit a node before traversing
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);  // visit a node after traversing to the ends
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
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
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());



