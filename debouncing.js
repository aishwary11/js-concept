function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const doSearch = (query) => console.log(`Searching for "${query}"...`);

const debouncedSearch = debounce(doSearch, 2000);

debouncedSearch('apple');
debouncedSearch('orange');
debouncedSearch('pear');