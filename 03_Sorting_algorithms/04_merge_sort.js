// O(n) Space

// O(nlog(n)) Time
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge_array(mergeSort(left), mergeSort(right));
}

function merge_array(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let merged_array = [];
  while (idx1 < arr1.length && idx2 < arr2.length) {
    console.log(arr1[idx1], arr2[idx2]);
    if (arr1[idx1] < arr2[idx2]) {
      merged_array.push(arr1[idx1]);
      idx1++;
    } else {
      merged_array.push(arr2[idx2]);
      idx2++;
    }
  }
  while (idx1 < arr1.length) {
    merged_array.push(arr1[idx1]);
    idx1++;
  }
  while (idx2 < arr2.length) {
    merged_array.push(arr2[idx2]);
    idx2++;
  }
  return merged_array;
}

console.log(mergeSort([454, 23, -56, 4, 432, -97, 2, 1, 2, 3, 4, 6]));
