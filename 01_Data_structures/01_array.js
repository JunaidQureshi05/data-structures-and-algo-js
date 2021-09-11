// O(n) Space

class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  //   O(1) Time
  push(element) {
    this.data[this.length] = element;
    this.length += 1;
    return [this.data, this.length];
  }

  //   O(1) Time
  pop() {
    if (this.length === 0) {
      return 'Empty List';
    } else {
      let deletedElement = this.data[this.length];
      delete this.data[this.length];
      this.length--;
      return deletedElement;
    }
  }

  //   O(n) Time
  insert(element, idx) {
    if (idx < 0 || idx > this.length) {
      return 'Enter a valid index!';
    } else if (idx == this.length) {
      this.push(element);
    } else {
      for (let i = this.length - 1; i >= idx; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[idx] = element;
      return this.data;
    }
  }

  //   O(n) Time
  delete(idx) {
    if (this.length === 0) {
      return;
    } else if (idx > this.length || idx < 0) {
      return 'Enter a valid index';
    } else if (idx === this.length - 1) {
      this.pop();
    } else {
      let deletedElement = this.data[idx];
      for (let i = idx; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
      return deletedElement;
    }
  }
}

var list = new Array();

for (let i = 1; i <= 10; i++) {
  if (i != 3) {
    list.push(i);
  }
}

console.log(list.data);

list.insert(3, 2);
console.log(list.data);

list.pop();
console.log(list.data);

list.delete(5);
console.log(list.data);
