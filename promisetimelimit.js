function promiseWithTimeLimit(fn, timeLimit) {
  return async (...args) => {
    const originalFnPromise = fn(...args);
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise timed out').message);
        clearTimeout(timeoutPromise);
      }, timeLimit);
    });
    return Promise.race([originalFnPromise, timeoutPromise]);
  };
}

function fetchData(delay = 1000) {
  console.log('delay: ', delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users').then(res => resolve(res.json()));
    }, delay);
  });
}

const timeLimitedPromise = promiseWithTimeLimit(fetchData, 500);

timeLimitedPromise(2000)
  .then(data => console.log(data))
  .catch(error => console.error(error));