function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return;
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value); // 1, then 2, then 3
}

