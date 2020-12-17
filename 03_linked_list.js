// O(n)Space

// Time complexity

// Access
// O(1) Search;
// O(1) Insertion;
// O(1) Deletion;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(value, idx) {
    if (idx < 0 || idx > this.length) {
      console.log("Check the index ");
    } else if (idx === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let previousNode = this.traverseToIndex(idx - 1);
      node.next = previousNode.next;
      previousNode.next = node;
      this.length++;
    }
  }
  traverseToIndex(idx) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(idx) {
    if (idx == 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      let leader = this.traverseToIndex(idx - 1);
      leader.next = leader.next.next;
      this.length--;
    }
  }
  printList() {
    let items = [];
    let currentNode = this.head;
    while (currentNode) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return items;
  }
}

let list = new LinkedList();
list.append(5);
list.prepend(3);
list.insert(4, 1);
list.remove(2);
console.log(list.printList());
