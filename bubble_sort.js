// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([7, 8, 4, 1, 2, 5]));

/**
 * optimized code for bubble sort
 */

const bubbleSortOp = (arr) => {
  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
};
console.time();
console.log(bubbleSortOp([7, 8, 4, 1, 2, 5]));
console.timeEnd();