/**
 * @reduce
 */

// const path = require('path');
// const arr = [1, 2, 3, 4, 10, 11];
// console.log(arr.reduce((acc, itm) => acc + itm, 0));

// const obj = {
//   name: "bham",
//   surname: "sharma"
// };
// console.log(obj?.age || "Aish");

// const fileName = "dtsctd.png";
// console.log(path.extname(fileName));


// const x = {
//   foo: "bar"
// };
// console.log(Object.hasOwn(x, "foo"));

// function reverseString(str) {
//   // remove all non-alphabetic characters using regular expression
//   const newStr = str.replace(/[^A-Za-z]/g, '');
//   // convert the new string to array, reverse it and join again to get the reversed string
//   const reversedStr = newStr.split('').reverse().join('');
//   // loop through the original string and add the non-alphabetic characters at their original positions
//   let j = 0;
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (!/[A-Za-z]/.test(str[i])) {
//       // if the character is non-alphabetic, add it to the result
//       result += str[i];
//     } else {
//       // if the character is alphabetic, add the reversed alphabetic character to the result
//       result += reversedStr[j];
//       j++;
//     }
//   }
//   return result;
// }

// console.log(reverseString('Aish*wa#ry')); // Output: yraw*hs#iA

// console.time("normal math");
// console.log(~~(Math.random() * 100000));
// console.timeEnd("normal math");

// console.time("math");
// console.log(Math.round(Math.random() * 100000));
// console.timeEnd("math")

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = [];
console.time("for");
for (let ar of arr) {
  for (let i = 0; i < ar.length; i++) {
    if (!(i === 0 || i === ar.length - 1)) {
      result.push(ar[i]);
    }
  }
}
console.timeEnd("for");
console.time("flat");
const resultt = arr.flatMap(ar => ar.slice(1, -1));
console.timeEnd("flat");
console.log(result, resultt);

const alphaArr1 = ['a', 'b', 'c'];
const alphaArr2 = ['d', 'e', 'a', 'b', 'c', 'f'];
function match(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
}
function match1(arr1, arr2) {
  let index = 0;
  return arr1.every(char => {
    index = arr2.indexOf(char, index);
    return index !== -1 && index >= 0;
  });
}
console.log(match(alphaArr1, alphaArr2));
console.log(match1(alphaArr1, alphaArr2));

const obj = {
  designation: {
    position: "Developer",
    seniorPosition: "Senior Developer"
  },
  name: "Aishwary",
};

function optimizedRecursiveObj(obj, target) {
  if (obj === target) return true;
  if (typeof obj !== 'object' || obj === null) return false;
  for (let key in obj) {
    if (obj[key] === target) return true;
    if (typeof obj[key] === 'object') {
      if (optimizedRecursiveObj(obj[key], target)) return true;
    }
  }
  return false;
}

function recursiveObj(obj, target) {
  if (obj === target) return true;
  if (typeof obj !== 'object' || obj === null) return false;
  for (let key in obj) {
    if (recursiveObj(obj[key], target)) return true;
  }
  return false;
}
console.time("optimized");
console.log(optimizedRecursiveObj(obj, "Senior Developer"));
console.timeEnd("optimized");
console.time();
console.log(recursiveObj(obj, "Senior Developer"));
console.timeEnd();