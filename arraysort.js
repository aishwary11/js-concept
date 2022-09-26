const arr1 = [12, 1, 3, -9], arr2 = [33, 3, 55, -11];
const mergeArr = arr1.concat(arr2);
let temp = 0;
let sortedArr = [];
for (let i = 0; i < mergeArr.length; i++) {
  for (let j = 0; j < mergeArr.length; j++) {
    if (mergeArr[i] < mergeArr[j]) {
      temp = mergeArr[i];
      mergeArr[i] = mergeArr[j];
      mergeArr[j] = temp;
    }
  }
}

console.log(mergeArr);
