async function fetchData(url) {
  let cache = {};
  if (cache[url]) return cache[url];
  const data = await fetch(url).then(res => res.json());
  cache[url] = data;
  return cache[url];
}
async function fetcher() {
  await fetchData('https://jsonplaceholder.typicode.com/posts');
  await fetchData('https://jsonplaceholder.typicode.com/posts');
  await fetchData('https://jsonplaceholder.typicode.com/posts');
};
console.time();
fetcher();
console.timeEnd();
