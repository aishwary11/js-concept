const fruits = ['Apple', 'Grapes', 'Pineapple', 'Banana', 'Mango'];
// const ItemsData = [
//   {item: 'Apple', type: 'fruit'}, 
//   {item: 'Grapes', type: 'fruit'}, 
//   {item: 'Pineapple', type: 'fruit'}, 
//   {item: 'Banana', type: 'fruit'}, 
//   {item: 'Mango', type: 'fruit'}
// ]

let data = fruits.map((ele) => ({ item: ele, type: 'fruit' }));
console.log(data);

const reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, () => vow.pop());
};
console.log(reverseVowels('IceCreAm'));