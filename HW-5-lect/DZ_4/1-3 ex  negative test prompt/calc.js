const user = {
  name: "Jonn",
};
function assignObj() {
  const input = prompt("Enter a digit", "15");
  user.age = input;
  const admin = { ...user, role: "admin" };
  const { name, age, role } = admin;
  return console.log(name, age, role);
}

module.exports = calc;
