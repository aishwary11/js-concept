// function borrowing (call)

let userName = {
  firstName: "Aishwary",
  lastName: "Shah",
};
let printFullName = function (homeTown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state);
};

let userName1 = {
  firstName: "Nikita",
  lastName: "Shah",
};

printFullName.call(userName, "Mumbai", "Mahashtra");
printFullName.apply(userName1, ["Mumbai", "Mahashtra"]);
// bind makes a copy of that method
let printMyName = printFullName.bind(userName, "Mumbai", "Mahashtra");
printMyName();
