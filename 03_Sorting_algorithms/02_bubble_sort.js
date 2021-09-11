// O(1) Space
// O(n^2) Time

function bubbleSort_old(arr) {
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

function bubbleSort(arr) {
  let isSorted = false;
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);
  while (!isSorted) {
    isSorted = true;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        isSorted = false;
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 3, 2, 1]));
