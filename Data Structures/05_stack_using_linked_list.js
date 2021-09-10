// O(n) Space

// Time complexity
// O(1) push
// O(1) pop
// O(1) peek

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.bottom = this.top;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
  }
  pop() {
    if (!this.top) {
      this.bottom = null;
    } else {
      if (this.top == this.bottom) {
        this.bottom = null;
      }
      let deletedItem = this.top.value;
      this.top = this.top.next;
      this.length--;
      return deletedItem;
    }
  }

  peek() {
    if (this.length === 0) {
      return;
    } else {
      return this.top.value;
    }
  }
}
let list = new Stack();
list.push(1);
list.push(2);
console.log(list.peek());
console.log(list);
