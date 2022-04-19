// Write  a program to implement binary search tree data structure with functionalities listed below
// 1 - add Node [x]   //O(log(n))
// 2 - pre order traversal [x] //O(n)
// 3 - post order traversal [x] //O(n)
// 4 - in order traversal  [x] //O(n)
// 5 - get max in binary tree [x] //O(log(n))
// 6 - get min in binary tree [x] //O(log(n))
// 7 -  lookup - check whether a value exist in the tree or not [x] //O(log(n))



class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        }
        else {
            let current_node = this.root;
            while (true) {
                if (node.value < current_node.value) {
                    if (!current_node.left) {
                        current_node.left = node;
                        return
                    }
                    current_node = current_node.left
                }
                else if (node.value > current_node.value){
                    if(!current_node.right){
                        current_node.right = node
                        return
                    }
                    current_node = current_node.right;
                }
                else{
                    console.log('No duplication allowed',node.value);
                    return
                }
            }
        }
    }
    preOrder(node=this.root){
       console.log(node.value);
        if(node.left){
            this.preOrder(node.left);
        }
        if(node.right){
            this.preOrder(node.right);
        }
    }
    postOrder(node=this.root){
        if(node.left){
            this.postOrder(node.left)
        }
        if(node.right){
            this.postOrder(node.right);
        }
        console.log(node.value);
    }
    inOrder(node= this.root){
        if(node.left){
            this.inOrder(node.left);
        }
        console.log(node.value)
        if(node.right){
            this.inOrder(node.right);
        }
    }
    getMax(){
        let current_node = this.root;
        while(current_node.right){
            current_node = current_node.right
        }
        return current_node.value
    }

    getMin(){
        let current_node = this.root
        while(current_node.left){
            current_node = current_node.left;
        }
        return current_node.value
    }
    lookup(value){
        let current_node = this.root;
        while(current_node){
             if(current_node.value == value){
            return true
        }
        else if(value <current_node.value){
            current_node =current_node.left;
        }
        else{
            current_node = current_node.right;
        }
        }
       return false;
    }
}

let myBSTtree = new BST();
myBSTtree.addNode(100)
myBSTtree.addNode(40)
myBSTtree.addNode(110)
myBSTtree.addNode(30)
myBSTtree.addNode(50)
myBSTtree.addNode(10)
myBSTtree.addNode(35)
myBSTtree.addNode(45)
myBSTtree.addNode(55)
myBSTtree.addNode(105)
myBSTtree.addNode(115)
console.log('Max ',myBSTtree.getMax())
console.log('Min ',myBSTtree.getMin())
console.log(myBSTtree.lookup(11))
console.log(myBSTtree)
