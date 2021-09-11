// O(log(n)) Space

// O(nlog(n)) Time
// O(n^2) Time (Worst case)

function quickSort(arr) {
  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}

function quickSortHelper(arr, start, end) {
  if (start >= end) return;
  let pivotIdx = start;
  let leftIdx = start + 1;
  let rightIdx = end;

  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      swap(arr, leftIdx, rightIdx);
    }
    if (arr[leftIdx] <= arr[pivotIdx]) {
      leftIdx++;
    }
    if (arr[rightIdx] >= arr[pivotIdx]) {
      rightIdx--;
    }
  }
  swap(arr, rightIdx, pivotIdx);
  let isLeftSubArrayIsSmall = rightIdx - 1 - start < end - (start + 1);
  if (isLeftSubArrayIsSmall) {
    quickSortHelper(arr, start, rightIdx - 1);
    quickSortHelper(arr, rightIdx + 1, end);
  } else {
    quickSortHelper(arr, rightIdx + 1, end);
    quickSortHelper(arr, start, rightIdx - 1);
  }
}

const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

console.log(quickSort([454, 23, -56, 4, 432, -97, 2, 1, 2, 3, 4, 6]));
