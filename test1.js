const arr = [
  { name: "A", class: 5 },
  { name: "B", class: 6 },
  { name: "C", class: 6 },
  { name: "D", class: 5 },
];

const resultArr = arr.reduce((acc, itm) => {
  if (!acc[itm.class]) {
    acc[itm.class] = { class: itm.class, names: [] };
  }
  acc[itm.class].names.push(itm.name);
  return acc;
}, {});
console.log(Object.values(resultArr));

let obj = {
  '1': { name: 'A', class: 5 },
  '2': { name: 'B', class: 6 },
  '3': { name: 'C', class: 6 },
  '4': { name: 'D', class: 5 }
};

const resultObj = Object.values(obj).reduce((acc, itm) => {
  if (!acc[itm.class]) {
    acc[itm.class] = { class: itm.class, names: [] };
  }
  acc[itm.class].names.push(itm.name);
  return acc;
}, {});
console.log(Object.values(resultObj));