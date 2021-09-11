// O(n^2) Time
// O(1) Space

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    swap(arr, i, smallest);
  }
  return arr;
}

console.log(selectionSort([56, 32, 56, 332, 43, 12]));
