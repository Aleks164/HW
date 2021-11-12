function calc() {
  const date = window.prompt(
    "Pelease input date format with dd.mm.yyyy in the input field",
    "28.10.2021"
  );
  const [day, month, year] = date.split(".");
  const newDate = new Date(year, month - 1, day);
  const dayOfWeek = newDate.toLocaleString("default", { weekday: "long" });
  if (dayOfWeek !== "Invalid Date") {
    window.alert(`${day}.${month}.${year} это ${dayOfWeek}`);
  } else {
    window.alert("Invalid date type");
  }
}
export default calc;
