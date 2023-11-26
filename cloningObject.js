const user = { name: "Aishwary" };
const userInfo = structuredClone(user);
userInfo.surname = "Shah";
console.log(user, userInfo);