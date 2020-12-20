// O(n) Space

// Time Complexity
// Best case
// O(1) Access
// O(1) Insert
// O(1) Delete

// Worst case
// O(n) Access
// O(n) Insert
// O(n) Delete
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hash_value = this._hash(key);
    let reference = this.data[hash_value];
    if (!this.data[hash_value]) {
      this.data[hash_value] = [];
      this.data[hash_value].push([key, value]);
    } else {
      for (let i = 0; i < reference.length; i++) {
        if (reference[i][0] === key) {
          reference[i][1] = value;
          return;
        }
      }
      reference.push([key, value]);
    }
  }
  get(key) {
    let hash_value = this._hash(key);
    let reference = this.data[hash_value];
    console.log(reference);
    for (let i = 0; i < reference.length; i++) {
      if (reference[i][0] == key) {
        return reference[i][1];
      }
    }
    return null;
  }
  remove(key) {
    let reference = this.data[this._hash(key)];
    for (let i = 0; i < reference.length; i++) {
      if (reference[i][0] == key) {
        reference.splice(i, 1);
        return;
      }
    }
    return null;
  }

  getKeys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        } else {
          keys.push(this.data[i][0][0]);
        }
      }
    }
    return keys;
  }
}

let table = new HashTable(20);
table.set("grapes", 1000);
table.set("books", 400);
table.set("mobile", 1);
table.set("laptop", 1);
table.set("light", 1);
table.set("mouse", 1);
table.set("keyboard", 1);
table.set("headphones", 1);
table.set("board", 1);
table.set("chess", 1);
table.set("antivirus", 1);
console.log(table.getKeys());
