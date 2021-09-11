class Node {
  constructor(value) {
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
  inorder(node, list) {
    if (node.left) {
      this.inorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.inorder(node.right, list);
    }
    return list;
  }

  preorder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.preorder(node.left, list);
    }

    if (node.right) {
      this.preorder(node.right, list);
    }
    return list;
  }
  postorder(node, list) {
    if (node.left) {
      this.postorder(node.left, list);
    }

    if (node.right) {
      this.postorder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

let my_tree = new BST();

my_tree.insert(10);
my_tree.insert(5);
my_tree.insert(40);
my_tree.insert(4);
my_tree.insert(6);
my_tree.insert(20);
my_tree.insert(50);
my_tree.insert(3);
my_tree.insert(15);
my_tree.insert(30);
console.log(my_tree);
console.log(my_tree.postorder(my_tree.root, []));
