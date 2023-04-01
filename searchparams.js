const { searchParams } = new URL("https://jsonplaceholder.typicode.com/comments?postId=1&hobby=guitar");
console.log(Object.fromEntries(searchParams.entries()))