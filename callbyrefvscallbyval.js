// Demonstrates pass-by-value with a primitive
function changePrimitive(primitive) {
  primitive = 20; // This change won't affect the original variable
}

let num = 10;
changePrimitive(num);
console.log("num:", num); // Outputs: num: 10

// Demonstrates pass-by-reference with an object
function changeObject(obj) {
  obj.value = 20; // This change will affect the original object
}

let obj = { value: 10 };
changeObject(obj);
console.log("obj.value:", obj.value); // Outputs: obj.value: 20