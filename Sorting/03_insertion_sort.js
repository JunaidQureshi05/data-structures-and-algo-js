// O(1) Space
// O(n^2) Time

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1);
      j--;
    }
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
