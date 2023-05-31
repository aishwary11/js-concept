function sayDigit(n, arr) {
  if (n == 0) return n;
  const digit = n % 10;
  n = Math.floor(n / 10);
  sayDigit(n, arr);
  console.log(arr[digit]);
}

function main() {
  const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  sayDigit(432, arr);
}

console.time("say digit");
main();
console.timeEnd("say digit");

function getSum(arr, size) {
  if (size == 0) {
    return 0;
  }
  if (size == 1) {
    return arr[0];
  }
  return arr[0] + getSum(arr.slice(1), size - 1);
}

function sum() {
  let arr = [2, 4, 9, 9, 9];
  return getSum(arr, arr.length);
}
console.time("Sum");
console.log(sum());
console.timeEnd("Sum");