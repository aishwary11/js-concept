console.log("Start");
const promise = new Promise((resolve, reject) => {
  console.log("Inside promise");
  resolve("Promise resolved");
});
promise.then((result) => console.log(result));
await abc();
console.log("End");
async function abc() {
  console.log("abc");
}