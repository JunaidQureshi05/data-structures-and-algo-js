// O(n) Space

// O(nlog(n)) Time
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  return mergeSortedArray(mergeSort(left), mergeSort(right));
}

function mergeSortedArray(arr1, arr2) {
  let firstIdx = 0,
    secondIdx = 0;
  let sortedArray = [];
  while (firstIdx < arr1.length && secondIdx < arr2.length) {
    if (arr1[firstIdx] < arr2[secondIdx]) {
      sortedArray.push(arr1[firstIdx]);
      firstIdx++;
    } else {
      sortedArray.push(arr2[secondIdx]);
      secondIdx++;
    }
  }

  while (firstIdx < arr1.length) {
    sortedArray.push(arr1[firstIdx]);
    firstIdx++;
  }
  while (secondIdx < arr2.length) {
    sortedArray.push(arr2[secondIdx]);
    secondIdx++;
  }
  return sortedArray;
}

console.log(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
