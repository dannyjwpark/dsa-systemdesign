// https://www.theavocoder.com/data-structures/2018/12/23/binary-search-tree

const { off } = require("process");

// we need to create the constructor function for each node
function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

// The tree is a class, which constructor contains the value 
    //of the root node. By default, the root’s value is equal to null: 
    // there are no nodes in the tree until we add them! 

class Tree {
    constructor() {
        this.root = null;
    }

// Adding a node


addNode(data) {
    const newNode = new Node(data);
    if(!this.root){
        this.root = newNode;
    } else{
        this.insertNode(this.root, newNode)
    }
}

insertNode(node, newNode){
    if (newNode.data < node.data) {
        if (!node.left) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode)
        }
    } else {
        if (!node.right) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode)
        }
    }
}
remove(data){
    this.root = this.removeNode(this.root, data);
}

removeNode(node, data){
    if(!node){
        return null
    }
    if(data < node.data){
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data){
        node.right = this.removeNode(node.right, data);
        return node;
    } else{
        if(!node.left && node.right){
            node= null;
            return node;
        }
        if (!node.left){
            node = node.right;
            return node;
        }
        if (!node.right){
            node = node.left;
            return node;
        }

        let min = this.findMinNode(node.right);
        node.data = min.data;
        node.right = this.removeNode(node.right, min.data);
        return node;
    }
}

// traversing

inOrder(data){
    if(node){
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}

preOrder(data) {
    if(node){
        console.log(node.data);
        this.inOrder(node.left);
        this.inOrder(node.right);
    }
}

postOrder(data){
    if(node){
        this.inOrder(node.left);
        this.inOrder(node.right);
        console.log(node.data);
    }
}

traverseBFS(){
    if(!this.root){
        return
    }
    this.queue = [];
    this.queue.push(this.root);

    while (this.queue.length){
        const node = this.queue.shift();
        if (node.left){
            this.queue.push(node.left);
        }
        if(node.right){
            this.queue.push(node.right);
        }
        return node.data;
    }
}

getMin(){
    let node = this.root;
    while (node.left){
        node= node.left;
    }
    return node.data
}

getMax(){
    let node = this.root;
    while (node.right) {
        node = node.right;
    }
    return node.data
}


}


n1 = new Node(3);
n2 = new Node(10);
n3 = new Node(7);
n4 = new Node(33);
n5 = new Node(2);
t1 = new Tree();
console.log(t1.addNode(n1));
t1.inOrder(n1);