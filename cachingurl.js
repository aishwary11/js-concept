const cache = {};
async function fetchData(url, method = 'GET', body = null) {
  if (cache[url]) return cache[url];
  try {
    const response = await fetch(url, { method, body });
    const data = await response.json();
    cache[url] = data;
    return data;
  } catch (err) {
    throw err;
  }
}

async function fetcher() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/comments',
  ];
  await Promise.all(urls.map(url => fetchData(url)));
}

console.time('fetchTime');
fetcher().then(() => console.timeEnd('fetchTime'));
