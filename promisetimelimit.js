const promiseWithTimeLimit = (fn, timeLimit) => async (...args) => {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error('Promise timed out')), timeLimit);
  });
  return Promise.race([fn(...args), timeoutPromise]).finally(() => clearTimeout(timeoutId));
};

function fetchData(url, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fetch(url).then(res => resolve(res.json())).catch(err => reject(err)), delay);
  });
}
promiseWithTimeLimit(fetchData, 2000)('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
// const timeLimitedPromise = promiseWithTimeLimit(fetchData, 2000);
// timeLimitedPromise('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));