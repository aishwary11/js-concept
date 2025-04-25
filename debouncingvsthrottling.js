/** Debouncing - delaying the execution of a function */
const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const doSearch = (query) => console.log(`Searching for "${query}"...`);

const debouncedSearch = debounce(doSearch, 2000);

debouncedSearch('apple');
debouncedSearch('orange');
debouncedSearch('pear');

/** Throttling - limiting the rate at which a function is called */
const throttleFunc = (func, delay = 5000) => {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    func(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

const cons = () => console.log('logger throttle');

const throttledCons = throttleFunc(cons, 3000);

throttledCons();
throttledCons();
throttledCons();