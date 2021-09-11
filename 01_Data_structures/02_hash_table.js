// O(n) Space

// Best Case
// Access(1)
// I1sert(1)
// Delete(1)

// Worst Case
// Access(n)
// Insert(n)
// Delete(n)

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
        if (reference[i][0] == key) {
          reference[i][1] = value;
          return;
        }
      }
      reference.push([key, value]);
    }
  }
  keys() {
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

  get(key) {
    let hash_value = this._hash(key);
    let reference = this.data[hash_value];
    for (let i = 0; i < reference.length; i++) {
      if (reference[i][0] === key) {
        return reference[i][1];
      }
    }
    return null;
  }
  remove(key) {
    let hash_value = this._hash(key);
    let reference = this.data[hash_value];
    for (let i = 0; i < reference.length; i++) {
      if (reference[i][0] === key) {
        reference.splice(i, 1);
      }
    }
    return null;
  }
}

let dic = new HashTable(10);

dic.set('Bananas', 10);

dic.set('Apples', 3);
dic.set('orange', 4);
dic.set('Watermelon', 1);
dic.set('Protein Shake', 30);
dic.set('Sun glasses', 32);
dic.set('Books', 3);
dic.set('turmeric', 3);
dic.set('pen', 3);
dic.set('Watermelon', 100);
console.log(dic.data);
dic.remove('Apples');

console.log(dic.keys());
console.log(dic.get('Watermelon'));
