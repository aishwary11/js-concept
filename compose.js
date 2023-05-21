// // Compose function
// const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);

// // Functions
// const addFee = amount => amount + 2;
// const addDiscount = amount => amount - 5;

// // function composition
// const composition = compose(addFee, addDiscount)(100);

// console.log(composition);
const compose1 = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const compose2 = (...fns) => x => {
  for (let idx = fns.length - 1; idx >= 0; idx--) {
    x = fns[idx](x);
  }
  return x;
};
const double = x => x * 2;
const square = x => x * x;
const sphere = x => Math.PI * x;

// function composition
let output_final1 = compose1(square, double, sphere)(2);
let output_final2 = compose2(square, double, sphere)(2);
// let output_final = compose(sphere, double, square)(2);
console.time("Method 1");
console.log(output_final1);
console.timeEnd("Method 1");
console.time("Method 2");
console.log(output_final2);
console.timeEnd("Method 2");