/** Shallow Copy - only one level copied */
const obj = {
  name: "Aishwary",
  info: {
    age: 30
  }
};
const obj1 = { ...obj };
obj1.name = "Shah";
obj1.info.age = 40;
console.log(obj, obj1);

/** Deep Copy - all levels copied */
const objj = {
  name: "Aishwary",
  info: {
    age: 30
  }
};
const obj2 = structuredClone(objj);
obj2.name = "Shah1";
obj2.info.age = 35;
console.log(objj, obj2);