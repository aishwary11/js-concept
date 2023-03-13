/**
 * here we shift 10 binary to right shift
 */
const ten = 10; // 1010
const one = 1;  // 0001
const two = 2;  // 0010
console.log(ten >> two); // 0010
console.log(ten << two); // 101000

/**
 * ^ XOR operator 
 */

const x = 10; // 1010
const y = 5;  // 0101
console.log(x ^ y); // 1111

/**
 * & AND operator
 * if 1 + 1 = 1
 */
const z = 1;
console.log(x & 2); // 0010