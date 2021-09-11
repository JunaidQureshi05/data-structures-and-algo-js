// O(n) Time
// O(1) Space

function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return `Found Element at idx ${i}`;
    }
  }
  return `Element doesn't exist.`;
}

console.log(linearSearch([1, 2, 3, 4, 5], 5));
