// O(n) Space

// O(log(n)) insert
// O(log(n)) lookup

class Node {
  constructor(value) {
    s;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current_node = this.root;
      while (true) {
        if (current_node.value > value) {
          if (!current_node.left) {
            current_node.left = node;
            return;
          }
          current_node = current_node.left;
        } else if (current_node.value < value) {
          if (!current_node.right) {
            current_node.right = node;
            return;
          }
          current_node = current_node.right;
        } else {
          console.log('Duplication is not allowed');
          return;
        }
      }
    }
  }
  lookup(value) {
    let current_node = this.root;
    if (!this.root) {
      return false;
    }
    while (current_node != null) {
      if (current_node.value > value) {
        current_node = current_node.left;
      } else if (current_node.value < value) {
        current_node = current_node.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let bst = new BST();
bst.insert(5);
bst.insert(4);

bst.insert(4.5);
bst.insert(7);
bst.insert(6);
console.log(bst.lookup(7));
console.log(bst.root);
