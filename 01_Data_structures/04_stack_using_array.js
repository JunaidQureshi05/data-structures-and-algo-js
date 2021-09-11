// O(n) Space

// O(1) Push
// O(1) Pop
// O(1) Peek

class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(element) {
    this.data.push(element);
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    this.data.pop();
    this.length--;
  }
  peek() {
    if (this.length === 0) {
      return;
    }
    return this.data[this.length - 1];
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack.peek());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.data, stack.length);
