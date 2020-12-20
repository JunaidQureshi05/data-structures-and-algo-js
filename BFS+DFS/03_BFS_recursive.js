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

  DFS(queue, list) {
    if (queue.length === 0) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.DFS(queue, list);
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
console.log(my_tree.DFS([my_tree.root], []));
