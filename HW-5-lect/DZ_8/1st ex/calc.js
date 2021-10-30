const calc = function () {
  const date = window.prompt(
    "Pelease input date format with dd.mm.yyyy in the input field"
  );
  const [day, month, year] = date.split(".");
  const newDate = new Date(day, month - 1, year);
  const dayOfWeek = newDate.toLocaleString("default", { weekday: "long" });
  console.log(dayOfWeek);
};

module.exports = calc;
