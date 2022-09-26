// const fsPromises = require('fs').promises;
// let data = "This is a file containing a collection of movies.";
// (main = async () => await fsPromises.writeFile("file/text.txt", data))();

// const path = require('path');
// console.log(path.extname("aish.png"));


// function toFindDuplicate(arr) {
//   const array = [];
//   const uniqueElements = new Set(arr);
//   let names = [...new Set(arr.map((e, i) => e.split(" ")[0]))];
//   uniqueElements.forEach((e, i) => {
//     console.log('------', arr.indexOf(e.split(" ")[0]));
//     if (e.split(" ")[0] != names[i]) {
//       array.push(i);
//     }
//   });
//   // arr.filter((itm, i) => {
//   //   if (itm.split(" ")[0] != names[i]) {
//   //     array.push(i);
//   //     uniqueElements.delete(itm);
//   //   }
//   // });
//   console.log(array);
// }
const arr = ["aish shah", "aish patel", "niki shah", "ani shah"];
// toFindDuplicate(arr);
const nameArray = [];
let names = [...new Set(arr.map((e, i) => e.split(" ")[0]).flat())];
for (let i = 0; i < names.length; i++) if (arr[i].split(" ")[0] != names[i]) nameArray.push(arr.slice(i, arr.length));
console.log(nameArray.flat());
