// O(log(n)) Time
// O(1) Space
function binarySearch(array, element) {
  let low = 0;
  let high = array.length - 1;
  let mid = Math.floor(low + high / 2);

  while (low <= high) {
    if (array[mid] === element) {
      return `element found at ${mid}`;
    } else if (element > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = Math.floor(low + high / mid);
  }

  return "element not found";
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
