const compose1 = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const square = x => x * x;
const double = x => x * 2;
const sphere = x => Math.PI * x;

// function composition
let output_final1 = compose1(square, double, sphere)(2);

console.time("Method 1");
console.log(output_final1);
console.timeEnd("Method 1");

const compose2 = (...fns) => x => {
  for (let idx = fns.length - 1; idx >= 0; idx--) {
    x = fns[idx](x);
  }
  return x;
};
let output_final2 = compose2(square, double, sphere)(2);

console.time("Method 2");
console.log(output_final2);
console.timeEnd("Method 2");