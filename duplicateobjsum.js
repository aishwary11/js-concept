/**
 * @note Object cannot have duplicate keys
 */
const obj = {
  a: 1,
  b: 2,
  b: 3,
};

const aggregatedObj = Object.entries(obj).reduce((acc, [key, value]) => {
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(value);
  return acc;
}, {});

for (const key in aggregatedObj) {
  const sum = aggregatedObj[key].reduce((total, val) => total + val, 0);
  obj[key] = sum;
}

console.log(obj);
