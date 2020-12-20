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
console.log(my_tree.inorder(my_tree.root, []));
console.log(my_tree.preorder(my_tree.root, []));
console.log(my_tree.postorder(my_tree.root, []));
