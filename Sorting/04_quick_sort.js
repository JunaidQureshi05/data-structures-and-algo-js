// O(log(n)) Space

// O(nlog(n)) Time - best case
// O(n^2) Time - worst case

function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, start, end) {
  if (start >= end) {
    return;
  }
  let pivotIdx = start;
  let leftIdx = start + 1;
  let rightIdx = end;

  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(array, leftIdx, rightIdx);
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      rightIdx--;
    }
  }
  swap(array, pivotIdx, rightIdx);

  let leftSubArrayIsSmall = rightIdx - 1 - start < end - (rightIdx + 1);

  if (leftSubArrayIsSmall) {
    quickSortHelper(array, start, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, end);
  } else {
    quickSortHelper(array, rightIdx + 1, end);
    quickSortHelper(array, start, rightIdx - 1);
  }
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(quickSort([9, 6, 5, 4, 2, 1, 2, 3, 4, 5, 10]));
