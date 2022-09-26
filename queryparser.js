const url = require('url');
const querystring = require('querystring');
let rawUrl = 'https://stackabuse.com/users?page=2&limit=3';
let parsedUrl = url.parse(rawUrl);
let parsedQs = querystring.parse(parsedUrl.query);
console.log(parsedQs);