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

function fetchData(url, delay = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fetch(url).then(res => resolve(res.json())).catch(err => reject(err)), delay);
  });
}

const timeLimitedPromise = promiseWithTimeLimit(fetchData, 2000);

timeLimitedPromise('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error));