const cache = {};

async function fetchData(url) {
  if (cache.hasOwnProperty(url)) {
    return cache[url];
  }
  const data = await fetch(url).then(res => res.json());
  cache[url] = data;
  return cache[url];
}
console.time();
async function fetcher() {
  await fetchData('https://jsonplaceholder.typicode.com/posts');
  await fetchData('https://jsonplaceholder.typicode.com/posts');
  await fetchData('https://jsonplaceholder.typicode.com/posts');
};
fetcher();
console.timeEnd();
