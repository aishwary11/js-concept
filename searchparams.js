const { searchParams } = new URL("https://jsonplaceholder.typicode.com/comments?postId=1&hobby=guitar");
const entries = Object.fromEntries(searchParams.entries());
for (const i in entries) {
  console.log(i, entries[i]);
}