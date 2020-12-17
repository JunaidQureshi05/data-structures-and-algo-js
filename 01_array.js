// O(n) Space

// O(1) Access
// O(n) search
// O(n) insertion
// O(n) deletion

class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  insert(idx, value) {
    for (let i = this.length - 1; i >= idx; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[idx] = value;
    this.length++;
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    let deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }

  delete(idx) {
    if (this.length === 0) {
      return;
    }
    let deletedItem = this.data[idx];
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }
  //   print() {
  //     let data = [];
  //     for (let item of Object.values(this.data)) {
  //       data.push(item);
  //     }
  //     console.log(data);
  //   }
}

list = new Array();

list.push("Junaid");
list.push("banana");
list.push("orange");
list.push("glasses");
list.push("specs");
list.delete(3);
list.insert(3, "shoes");
console.log(list);
