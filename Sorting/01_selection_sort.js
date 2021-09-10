// O(1) Space

// O(n^2) Time
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestIdx] > array[j]) {
        smallestIdx = j;
      }
    }
    if (i != smallestIdx) {
      swap(array, i, smallestIdx);
    }
  }
  return array;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
