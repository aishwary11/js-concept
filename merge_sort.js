function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
};
console.time();
console.log(mergeSort([7, 8, 4, 1, 2, 5]));
console.timeEnd();