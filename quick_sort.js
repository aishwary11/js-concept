const quickSort = (arr) => {
  if (!arr.length) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [], greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) less.push(arr[i]);
    else greater.push(arr[i]);
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};
console.time();
console.log(quickSort([7, 8, 4, 1, 2, 5]));
console.timeEnd();