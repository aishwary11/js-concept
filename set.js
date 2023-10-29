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
console.log('\n\n');
const allowedExtArr = ['.png', '.jpg', '.jpeg'];
const setExtArr = new Set(allowedExtArr);
const imgExt = ['.ss', '.png'];
console.time('set');
const checkExt = imgExt.every(e => setExtArr.has(e));
console.timeEnd('set');
console.time('includes');
const checkExt1 = imgExt.every(e => allowedExtArr.includes(e));
console.timeEnd('includes');
// !checkExt ? console.log('need to change ext') : console.log("All Perfect");