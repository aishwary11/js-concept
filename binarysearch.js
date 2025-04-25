function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // let mid = left + Math.floor((right - left) / 2);
    let mid = left + ((right - left) >> 1);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.time("Binary Search Time");
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.timeEnd("Binary Search Time");
