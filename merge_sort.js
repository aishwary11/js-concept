function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  while (leftIndex < left.length) result.push(left[leftIndex++]);
  while (rightIndex < right.length) result.push(right[rightIndex++]);
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
console.time();
console.log(mergeSort([4, 2, 6, 1, 3, 5]));
console.timeEnd();