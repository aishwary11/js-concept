const arr1 = [12, 1, 3, -9], arr2 = [33, 3, 55, -11];
const mergeArr = arr1.concat(arr2);
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Copy remaining elements from left or right subarray
  while (leftIndex < left.length) {
    sorted.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    sorted.push(right[rightIndex]);
    rightIndex++;
  }

  return sorted;
}

// Example usage
const sortedArr = mergeSort(mergeArr);
console.log(sortedArr);

