function mergeSortedArrays(arr1, arr2) {
  let result = [], i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

function isValid(s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      const last = stack.pop();
      if (map[last] !== char) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}"));
// console.log(isValid("(]"));