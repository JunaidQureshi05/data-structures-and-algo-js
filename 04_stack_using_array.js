// O(n) Space

// Time complexity
// O(1) push
// O(1) pop
// O(1) peek
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(value) {
    this.data.push(value);
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
stack.pop();
console.log(stack.peek());
console.log(stack);
