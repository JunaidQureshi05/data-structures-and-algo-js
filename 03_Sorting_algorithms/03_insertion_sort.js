// O(1) Space
// O(n^2) Time

function insertionSort(arr) {
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([4, 3, 2, 23, 56, 326, 453, -12]));
