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



const x = {
  foo: "bar"
};
console.log(Object.hasOwn(x, "foo"));

function reverseString(str) {
  // remove all non-alphabetic characters using regular expression
  const newStr = str.replace(/[^A-Za-z]/g, '');
  // convert the new string to array, reverse it and join again to get the reversed string
  const reversedStr = newStr.split('').reverse().join('');
  // loop through the original string and add the non-alphabetic characters at their original positions
  let j = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!/[A-Za-z]/.test(str[i])) {
      // if the character is non-alphabetic, add it to the result
      result += str[i];
    } else {
      // if the character is alphabetic, add the reversed alphabetic character to the result
      result += reversedStr[j];
      j++;
    }
  }
  return result;
}

console.log(reverseString('Aish*wa#ry')); // Output: yraw*hs#iA

