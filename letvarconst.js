// Example demonstrating var, let, and const

// Using "var": function-scoped or global-scoped.
// Redeclaration is allowed and hoisted.
console.log('--- var example ---');
var a = 1;
if (true) {
  var a = 2; // redeclares the same variable
  console.log('Inside block, var a =', a); // outputs 2
}
console.log('Outside block, var a =', a); // outputs 2

// Using "let": block-scoped.
// Redeclaration in the same scope is not allowed.
console.log('\n--- let example ---');
let b = 1;
if (true) {
  let b = 2; // this 'b' is a new variable limited to the block
  console.log('Inside block, let b =', b); // outputs 2
}
console.log('Outside block, let b =', b); // outputs 1

// Using "const": block-scoped and cannot be reassigned.
// Must be initialized at the time of declaration.
console.log('\n--- const example ---');
const c = 1;
if (true) {
  const c = 2; // this 'c' is separate from the outer 'c'
  console.log('Inside block, const c =', c); // outputs 2
}
console.log('Outside block, const c =', c); // outputs 1

// Note: Attempting to reassign a const variable will throw an error.
// Uncommenting the line below will result in a TypeError.
// c = 3;