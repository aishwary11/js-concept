const promiseWithTimeLimit = (fn, timeLimit) => async (...args) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`The request to ${args[0]} timed out`)), timeLimit)
  );
  try {
    return await Promise.race([fn(...args), timeoutPromise]);
  } finally {
    clearTimeout(timeoutPromise);
  }
};
const fetchData = async (url, delay = 1000) => {
  await sleep(delay);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
};

promiseWithTimeLimit(fetchData, 2000)('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}