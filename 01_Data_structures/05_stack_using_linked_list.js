// O(n) Space

// O(1) Push
// O(1) Pop
// O(1) Peek

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
      let deleted_item = this.top.value;
      this.top = this.top.next;
      this.length--;
      return deleted_item;
    }
  }
  peek() {
    return this.top.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.top);
