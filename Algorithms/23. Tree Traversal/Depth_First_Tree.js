// DFT: working vertically
// PreOrder
  // can be used to copying or reconstruction of tree
  // also useful for getting prefix expression on an expression tree
  // InOrder
    // used commonly w/ BSTs
    // useful for ordering nodes in non-decreasing order
  // PostOrder
    // used to delete the tree (b/c it traverses the root in the end)
    // also useful for getting postfix expression

  // traversed RECURSIVELY


// ex)
//       1
//     /   \
//    2     3
//   / \
//  4   5

// Depth First Traversals: 
  // (a) Preorder (Root, Left, Right) : 1 2 4 5 3 
  // (b) Inorder (Left, Root, Right) : 4 2 5 1 3 
  // (c) Postorder (Left, Right, Root) : 4 5 2 3 1
// Breadth-First or Level Order Traversal: 1 2 3 4 5 


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
      // 1. Visit the root.
      data.push(node.value);  // visit a node before traversing
      // 2. Traverse the left subtree, i.e., call Preorder(left-subtree)
      if(node.left) traverse(node.left);
      // 3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    let data = [];
    function traverse(node){
      // 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
      if(node.left) traverse(node.left);
      // 2. Visit the root.
      data.push(node.value);
      // 3. Traverse the right subtree, i.e., call Inorder(right-subtree)
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder(){
    let data = [];
    function traverse(node){
      // 1. Traverse the left subtree, i.e., call Postorder(left-subtree)
      if(node.left) traverse(node.left);
      // 2. Traverse the right subtree, i.e., call Postorder(right-subtree)
      if(node.right) traverse(node.right);
      // 3. Visit the root.
      data.push(node.value);  // visit a node after traversing to the ends
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



