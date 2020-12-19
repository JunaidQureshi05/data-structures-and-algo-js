// O(n) Space

// O(log(n)) insert
// O(log(n)) lookup

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (currentNode.value > value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return;
          }
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          if (!currentNode.right) {
            currentNode.right = node;
            return;
          }
          currentNode = currentNode.right;
        } else {
          console.log("No duplication allowed");
          return;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;

      while (currentNode != null) {
        if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
      return false;
    }
  }
}

let tree = new BST();

tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(7);
console.log(tree.lookup(4));
