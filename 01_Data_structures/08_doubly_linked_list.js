// class for creating nodes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// class for creating linked list
// O(n) Space
// O(n) Search;
// O(1) Insertion;
// O(1) Deletion;
class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //   O(1) Time
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  //   O(1) Time
  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }
  traverse_to_index(idx) {
    let counter = 0;
    let current_node = this.head;
    while (counter != idx) {
      current_node = current_node.next;
      counter++;
    }
    return current_node;
  }

  insert(element, idx) {
    if (idx < 0 || idx > this.length) {
      console.log('Check index!!!');
    } else if (idx === 0) {
      this.prepend(value);
    } else {
      let node = new Node(element);
      let leader = this.traverse_to_index(idx - 1);
      let treller = leader.next;
      leader.next = node;
      node.prev = leader;
      node.next = treller;
      treller.prev = node;
      this.length++;
    }
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) {
      console.log('Check index!!!');
    } else if (idx === 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      let leader = this.traverse_to_index(idx - 1);
      leader.next = leader.next.next;
      leader.next.next.prev = leader;
      this.length--;
    }
  }

  print() {
    let nodes = [];
    let current_node = this.head;
    while (current_node) {
      nodes.push(current_node.value);
      current_node = current_node.next;
    }
    return nodes;
  }
}

let list = new doublyLinkedList();
list.append(1);
list.append(2);
list.prepend('Junaid');
list.prepend('Hamza');
list.insert('Qureshi', 2);
list.insert(100, 1);
list.remove(0);
console.log(list.head);
