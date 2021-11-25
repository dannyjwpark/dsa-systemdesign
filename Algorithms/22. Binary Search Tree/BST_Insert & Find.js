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

    // if there is no root, make the new node a root and return
    if(this.root === null){
      this.root = newNode;
      return this;
    }

    // traverse from root
    let current = this.root;
    while(true){
      // if duplicate with current, return undefined
      if(value === current.value) return undefined;
      // if less, go to left and return
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      // if greater, go to right and return
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
    let current = this.root, found = false;

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
    let current = this.root, found = false;

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
}


//      10
//   6     15
// 3  8  13  20

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(13)
tree.insert(20)

console.log("finding:")
console.log(tree.find(10));
console.log(tree.find(15));
console.log(tree.find(13));
console.log(tree.find(100));
console.log("--------------------------------------------------")

console.log("contains:")
console.log(tree.contains(10));
console.log(tree.contains(100));
console.log("--------------------------------------------------")
