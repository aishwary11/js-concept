// call by value
let obj1 = {
  name: "Aish"
};
let obj2 = obj1;
obj2.name = "Shah";
console.log(obj1, obj2);
console.log(obj1 === obj2);
// call by ref
let obj3 = {
  name: "Aish"
};
console.log(obj1 === obj3);





let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
console.log(arr1 == arr2);

let arr3 = arr1;
console.log(arr3 == arr1);