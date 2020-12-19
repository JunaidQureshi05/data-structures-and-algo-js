// O(n) Space

// O(1) Enqueue
// O(1) Dequeue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return;
    } else {
      if (this.first === this.last) {
        this.last = null;
      }
      let deletedValue = this.first.value;
      this.first = this.first.next;
      this.length--;
      return deletedValue;
    }
  }
}

let que = new Queue();
que.enqueue(5);
que.enqueue(6);
que.dequeue();
que.dequeue();
console.log(que);
