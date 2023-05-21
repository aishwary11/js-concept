const timeLimit = (fn, t) => {
  return async function (...args) {
    return new Promise((delayresolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject("Time Limit Exceeded");
        clearTimeout(timeoutId);
      }, t);
      fn(...args)
        .then((result) => {
          delayresolve(result);
          clearTimeout(timeoutId);
        })
        .catch((error) => {
          reject(error);
          clearTimeout(timeoutId);
        });
    });
  };
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doSomething() {
  await sleep(500);
  console.log(new Date());
}

const timedDoSomething = timeLimit(doSomething, 1000);

timedDoSomething().then(() => {
  console.log("Timed doSomething completed!");
}, (error) => {
  console.error(error);
});
