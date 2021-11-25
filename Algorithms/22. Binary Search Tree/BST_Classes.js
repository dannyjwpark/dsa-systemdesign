class Node {
  constructor(value){
    this.value = value;
    // left, right = child nodes
      // left: child w/ less value
    this.left = null;
      // right: child w/ greater value
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

// lists: linear
// trees: non-linear

// root: top node in a tree
// child: a node directly connected to another node when moving away from the root
// paraent: the converse notion of a child
// siblings: a group of nodes with same parent
// leaf: a node with no children

// BST: excels at searching
// can have at most 2 children

// Big O
  // time complexity
    // insertion
      // best/average: O(log(n))
      // worst: O(n)
    // searching
      // best/average: O(log(n))
      // worst: O(n)
  // space complexity
    // 