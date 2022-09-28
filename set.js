const userPermissions = ['CREATE_POST', 'EDIT_POST', 'DELETE_POST', 'READ_POST'];
/**
 * @Method 1 using includes method
 */
const post = () => userPermissions.includes('CREATE_POST') ? 200 : 400;
console.time('post');
console.log(post());
console.timeEnd('post');

/**
 * @Method 2 using Sets Method but more optimize because it doesnt use for loop
 */

const post2 = () => new Set(userPermissions).has('CREATE_POST') ? 200 : 400;
console.time('post2');
console.log(post2());
console.timeEnd('post2');