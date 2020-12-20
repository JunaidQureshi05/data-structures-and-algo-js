// O(1) Space

// O(n^2) Time
function bubbleSort(array) {
  let counter = 0;
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
