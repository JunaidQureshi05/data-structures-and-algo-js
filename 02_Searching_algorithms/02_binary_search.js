// Note :- Elements in the array shoul be sorted
// O(log(n)) Time
// O(1) Space
function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === element) {
      return `Element present at idx ${mid}`;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return "Element dosen'nt exist";
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
