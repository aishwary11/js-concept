function changeValue(val, ref) {
  val = 20;
  ref.value = 20;
}

let num = 10;   // pass by value
let obj = { value: 10 };    // pass by reference

changeValue(num, obj);

console.log("num:", num); // Outputs: num: 10
console.log("obj.value:", obj.value); // Outputs: obj.value: 20
