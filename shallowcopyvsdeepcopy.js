/** Shallow Copy - copies only the first level, nested objects maintain references */
const obj = {
  name: "Aishwary",
  surname: "Shah",
  info: {
    age: 30
  }
};
const obj1 = { ...obj };
obj1.name = "Aishwary1";
obj1.surname = "Shah1";
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
obj2.name = "Aishwary1";
obj2.info.age = 35;
console.log(objj, obj2);