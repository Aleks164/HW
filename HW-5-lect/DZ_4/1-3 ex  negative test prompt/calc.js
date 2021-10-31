const user = {
  name: "Jonn",
};
let admin;
function prompName() {
  const input = window.prompt("Enter a digit", "15");
  user.age = input;
  return user;
}
function assignObj() {
  prompName();
  admin = { ...user, role: "admin" };
  return admin;
}
function destrAssig() {
  assignObj();
  const { name, age, role } = admin;
  return console.log(name, age, role);
}

export { prompName, assignObj, destrAssig };
