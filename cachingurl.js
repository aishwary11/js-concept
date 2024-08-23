async function fetchData(url) {
  let cache = {};
  if (cache[url]) return cache[url];
  const resp = await fetch(url);
  const data = await resp.json();
  cache[url] = data;
  return cache[url];
}
async function fetcher() {
  await fetchData('https://jsonplaceholder.typicode.com/posts');
  await fetchData('https://jsonplaceholder.typicode.com/todos');
  await fetchData('https://jsonplaceholder.typicode.com/comments');
};
console.time();
fetcher();
console.timeEnd();
