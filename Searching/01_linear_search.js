// O(n) Time
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return `element found at ${i} index`;
    }
  }
  return "Element not found";
}

console.log(linearSearch([6, 4, 2, 8, 5, 4], 10));
